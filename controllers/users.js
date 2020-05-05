const { body, validationResult } = require('express-validator/check');
const { login, createAuthToken, createVerificationToken } = require('../auth');
const User = require('../models/user');
const { sendVerification } = require('../lib/email/index')

exports.login = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

   try {
    const unverified = await User.findOne({ username: req.body.username, isVerified: false })
    if (unverified) {
      return res.status(401).json({
        message: "Unverified account ! Check your email",
      })
    }
   }
   catch (e) {
    console.log("Login Error: ", e)
    return res.status(500).json({
      message: "Something Went Wrong !",
    })
   }
  


  login(req, res, next);
};

exports.register = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { username, password, email } = req.body;
    const token = createVerificationToken(email)
    const auth_link = `${req.protocol}://${req.headers.host}/verify/email?token=${token}`
    console.log("LINK: ", auth_link)
    const verificationEmail = await sendVerification(email, auth_link)
    console.log("Verification email sent to: ", email, verificationEmail)
    const user = await User.create({ username, password, email });
    // const token = createAuthToken(user.toJSON());
    res.status(201).json({ success: 'Account Created. Please check your email to verify your account' });
  } catch (err) {
    console.log("Registration Error: ", err)
    return res.status(500).json({
      message: "Something Went Wrong !",
    })
  }
};

exports.validate = method => {
  const errors = [
    body('username')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ max: 32 })
      .withMessage('must be at most 32 characters long')

      .custom(value => value.trim() === value)
      .withMessage('cannot start or end with whitespace')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains invalid characters'),

    body('password')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ min: 8 })
      .withMessage('must be at least 8 characters long')

      .isLength({ max: 72 })
      .withMessage('must be at most 72 characters long'),

    // body('username').custom(async username => {
    //   const unverified = await User.findOne({username:username, isVerified: false })
    //   if (unverified) throw new Error('Unverified Account ! Check your email')
    // })
  ];

  if (method === 'register') {
    errors.push(
      body('username').custom(async username => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error('already exists');
      }),
      body('email')
        .exists()
        .withMessage('is required')
        .isEmail()
        .withMessage('is invalid')
      ,
      body('email').custom(async email => {
        const exists = await User.countDocuments({ email })
        if (exists) throw new Error('already exists')
      })
    );
  }

  return errors;
};
