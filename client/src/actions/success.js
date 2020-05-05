export const SHOW_SUCCESS = 'SHOW_SUCCESS';
 const showSuccess = success => {
 
return { type: SHOW_SUCCESS, success }

}

export const HIDE_SUCCESS = 'HIDE_SUCCESS';
const hideSuccess = () => ({ type: HIDE_SUCCESS });

let timeout;
export const showSuccessWithTimeout = success => dispatch => {

  dispatch(showSuccess(success));
  clearTimeout(timeout);
  timeout = setTimeout(() => dispatch(hideSuccess()), 10000);
};

export const hideSuccessClearTimeout = () => dispatch => {
  dispatch(hideSuccess());
  clearTimeout(timeout);
};
