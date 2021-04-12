const initialState = {
  isFetching: false,
  isFetched: true,
  items: []
};

const FETCH_ITEMS_LOADING = 'FETCH_ITEMS_LOADING'
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

function reducer(state, action) {
  switch (action.type) {
    case FETCH_ITEMS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        items: action.payload
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        isFetched: true
      };
    default:
      return state
  }
}


export {
  reducer,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  initialState
}