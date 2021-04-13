import api from 'api'
import { CoinInfo, CoinInfoPlaceholder } from 'components/CoinInfo'
import { ItemList } from 'components/ItemList'
import React, { useEffect, useReducer } from 'react'
import { Button, Message } from 'semantic-ui-react'

import {
  CLEAR_COIN,
  FETCH_COIN_ERROR,
  FETCH_COIN_LOADING,
  FETCH_COIN_SUCCESS,
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

  function fetchCoin(id) {
    dispatch({ type: FETCH_COIN_LOADING })

    api
      .fetchCoin({ id })
      .then((data) => {
        dispatch({ type: FETCH_COIN_SUCCESS, payload: data })
      })
      .catch(() => {
        dispatch({ type: FETCH_COIN_ERROR })
      })
  }

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
    const showItemList = !state.coin.item && !state.coin.isFetching
    const showCoinPlaceholder = state.coin.isFetching
    const showCoin = state.coin.item

    const backButton = (
      <Button
        onClick={() => dispatch({ type: CLEAR_COIN })}
        content='Back'
        icon='left arrow'
        labelPosition='left'
      />
    )

    return (
      <>
        {showItemList && <ItemList onItemSelect={(id) => fetchCoin(id)} items={state.items} />}
        {showCoinPlaceholder && (
          <>
            {backButton}
            <CoinInfoPlaceholder />
          </>
        )}
        {showCoin && (
          <>
            {backButton}
            <CoinInfo item={state.coin.item} />
          </>
        )}
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
  return null
}
export default CoinList
