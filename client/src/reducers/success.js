
  import { SIGNUP_SUCCESS } from '../actions/auth';
  import { HIDE_SUCCESS , SHOW_SUCCESS} from '../actions/success';

  const initialState = null;
  
  export default (state = initialState, action) => {
    switch (action.type) {
     
      case SIGNUP_SUCCESS:
      case SHOW_SUCCESS:
        return action.success;
  
      case HIDE_SUCCESS:
        console.log("REDUCER !! ", action)
        return null;
  
      default:
        return state;
    }
  };
  