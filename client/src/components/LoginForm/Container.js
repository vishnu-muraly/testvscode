import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptLogin } from '../../actions/auth';
import { showSuccessWithTimeout } from '../../actions/success';
import LoginForm from './Component';

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = { attemptLogin,showSuccessWithTimeout };

const enhance = compose(
  reduxForm({ form: 'login' }),
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const LoginFormContainer = enhance(LoginForm);

export default LoginFormContainer;
