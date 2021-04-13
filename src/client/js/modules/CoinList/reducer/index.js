import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { formatNumber } from 'helpers/formatter'

const initialState = {
  isFetching: false,
  isFetched: false,
  items: [],
  coin: {
    isFetching: false,
    isFetched: false,
    item: null,
  },
}

// ACTION TYPES

const FETCH_ITEMS_LOADING = 'FETCH_ITEMS_LOADING'
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

const CLEAR_COIN = 'CLEAR_COIN'

const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS'
const FETCH_COIN_LOADING = 'FETCH_COIN_LOADING'
const FETCH_COIN_ERROR = 'FETCH_COIN_ERROR'

function reducer(state, action) {
  const itm = action.payload
  switch (action.type) {
    case FETCH_ITEMS_LOADING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        items: itm.map((item) => ({
          name: item.name,
          id: item.id,
          image: item.image,
          current_price: item.current_price,
          high_24h: item.high_24h,
          low_24h: item.low_24h,
          symbol: item.symbol.toUpperCase(),
        })),
      }
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        isFetched: true,
      }
    case FETCH_COIN_SUCCESS:
      return {
        ...state,
        coin: {
          ...state.coin,
          isFetching: false,
          isFetched: true,
          item: {
            marketCap: formatNumber(itm.market_data.market_cap.eur),
            id: itm.id,
            name: itm.name,
            image: itm.image.large,
            description: itm.description.en,
            algorithm: itm.hashing_algorithm,
            symbol: itm.symbol.toUpperCase(),
            date: itm.genesis_date ? format(parseISO(itm.genesis_date), 'MM/dd/yyyy') : 'TBD',
            homepage: itm.links.homepage.shift(),
          },
        },
      }
    case FETCH_COIN_LOADING:
      return {
        ...state,
        coin: {
          ...state.coin,
          isFetching: true,
        },
      }
    case FETCH_COIN_ERROR:
      return {
        ...state,
        coin: {
          ...state.coin,
          isFetching: false,
          isFetched: true,
        },
      }
    case CLEAR_COIN:
      return {
        ...state,
        coin: initialState.coin,
      }
    default:
      return state
  }
}

export {
  reducer,
  FETCH_COIN_ERROR,
  FETCH_COIN_SUCCESS,
  FETCH_COIN_LOADING,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  CLEAR_COIN,
  initialState,
}
