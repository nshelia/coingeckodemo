const initialState = {
  isStatusOkay: false,
  isFetching: true
};

const STATUS_LOADING = 'STATUS_LOADING'
const STATUS_SUCCESS = 'STATUS_SUCCESS'
const STATUS_ERROR = 'STATUS_ERROR'

function reducer(state, action) {
  switch (action.type) {
    case STATUS_LOADING:
      return {
        isFetching: true
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isStatusOkay: true
      };
    case STATUS_ERROR:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        isStatusOkay: false
      };
    default:
      return state
  }
}


export {
  reducer,
  STATUS_ERROR,
  STATUS_LOADING,
  STATUS_SUCCESS,
  initialState
}