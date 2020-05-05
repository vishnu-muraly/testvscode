const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');
const { jwtAuth, postAuth, commentAuth } = require('./auth');
const router = require('express').Router();
const jwt = require('jsonwebtoken')
const config = require('./config');
const User = require('./models/user');

router.post('/login', users.validate(), users.login);
router.post('/register', users.validate('register'), users.register);

router.param('post', posts.load);
router.get('/posts', posts.list);
router.get('/posts/:category', posts.listByCategory);
router.get('/post/:post', posts.show);
router.post('/posts', [jwtAuth, posts.validate], posts.create);
router.delete('/post/:post', [jwtAuth, postAuth], posts.destroy);
router.get('/post/:post/upvote', jwtAuth, posts.upvote);
router.get('/post/:post/downvote', jwtAuth, posts.downvote);
router.get('/post/:post/unvote', jwtAuth, posts.unvote);
router.get('/user/:user', posts.listByUser);

router.param('comment', comments.load);
router.post('/post/:post', [jwtAuth, comments.validate], comments.create);
router.delete('/post/:post/:comment', [jwtAuth, commentAuth], comments.destroy);

module.exports = app => {
  app.use('/api', router);

  // app.get('*', (req, res) => {
  //   res.status(404).json({ message: 'not found' });
  // });

  app.get('/verify/email', async (req, res) => {
       let {token} = req.query
       console.log(req.headers)
      try {
        let payload =  jwt.verify(token , config.jwt.secret)
      console.log(payload)
         if(payload) {
          let updatedUser =  await User.findOneAndUpdate({email: payload.email} , {$set: {isVerified: true}}, {new: true})

          if(updatedUser) {
            res.cookie('success', 'Verified Successfully!', {path: '/login',  })
            return res.redirect('/login')
          }
          else {
            res.cookie('error', 'Verification Failed. Please try again', {path: '/login',  })
          return res.redirect('/login')
          }

         }

         else{
          res.cookie('error', 'Verification Failed. Please try again', {path: '/login', })
          return res.redirect('/login')
         }
        
      }

      catch(err) {
        console.log("Email verification Error: ", err)
        res.cookie('error', 'Verification Failed. Please try again', {path: '/login', })
        return res.redirect('/login')
      }
      
})

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'bad request' });
    }
    next(err);
  });
};
