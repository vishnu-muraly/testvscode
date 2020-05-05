
  import {
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    
  } from '../actions/auth';
  import { hideSuccessClearTimeout, showSuccessWithTimeout } from '../actions/success';
  
  export default store => next => action => {
    next(action);
    switch (action.type) {
      case SIGNUP_SUCCESS:
            console.log("MIDDLEWARE SIGNUP SUCCESS !! ", action)
          store.dispatch(showSuccessWithTimeout(action.success));
        break;
  
      case SIGNUP_ERROR:      
        if (store.getState().success) store.dispatch(hideSuccessClearTimeout());
        break;
  
      default:
        break;
    }
  };
  