import api from 'api'
import { ItemList } from 'components/ItemList'
import React, { Message, Placeholder, useEffect, useReducer } from 'react'

import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  initialState,
  reducer,
} from '../reducer'

function CoinList() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getInitialData()
  }, [])

  function getInitialData() {
    dispatch({ type: FETCH_ITEMS_LOADING })
    api
      .fetchCoins({ order: 'market_cap_desc', perPage: 10 })
      .then((data) => {
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data })
      })
      .catch(() => {
        dispatch({ type: FETCH_ITEMS_ERROR })
      })
  }

  if (state.isFetching) {
    return (
      <>
        <ItemList placeholders />
      </>
    )
  }

  if (state.isFetched) {
    return (
      <>
        <ItemList items={state.items} />
      </>
    )
  }
  if (state.isFailed) {
    return (
      <>
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{"There's been a issue fetching items"}</p>
        </Message>
      </>
    )
  }
}
export default CoinList
