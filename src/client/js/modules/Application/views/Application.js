import api from 'api'
import { CoinList } from 'modules/CoinList'
import React, {useEffect, useReducer} from 'react'
import { hot } from 'react-hot-loader'
import { Dimmer,Header,Loader,Message } from 'semantic-ui-react'
import { StyledContainer } from 'shared/styled/Container'

import { 
  initialState,
  reducer,
  STATUS_ERROR,
  STATUS_LOADING,
  STATUS_SUCCESS} from '../reducer'
import { StyledCentered } from '../styled'

function Application() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetchServerStatus()
  },[])

  function fetchServerStatus() {
    dispatch({type: STATUS_LOADING})
    api.checkServerStatus().then(() => {
      dispatch({type: STATUS_SUCCESS})
    }).catch(() => {
      dispatch({type: STATUS_ERROR})
    })
  }
  if (state.isFetching) {
    return (
       <Dimmer active inverted>
          <Loader size="large">Checking server Status</Loader>
       </Dimmer>
    )
  }

  if (state.isStatusOkay) {
    return (
      <StyledContainer>
       <StyledCentered>
        <Header
          as="h2"
          content="Coingecko"
        />
         <CoinList/>
       </StyledCentered>
    </StyledContainer>
    )
  }

  if (!state.isStatusOkay && state.isFailed) {
    return (
      <Message negative>
        <Message.Header>Server Error</Message.Header>
        <p>Coingecko servers is currently unavailable</p>
      </Message>
    )
  }
  
}
export default hot(module)(Application)
