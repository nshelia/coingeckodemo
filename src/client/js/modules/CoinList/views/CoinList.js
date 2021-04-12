import api from 'api'
import  React, {useEffect, useReducer} from 'react'
import { Image,List,Segment} from 'semantic-ui-react'

import { 
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_LOADING,  
  FETCH_ITEMS_SUCCESS,
  initialState,
  reducer} from '../reducer'

function CoinList() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    getInitialData()
  },[])

  function getInitialData() {
    dispatch({type: FETCH_ITEMS_LOADING})
    api.fetchCoins({order: 'market_cap_desc', perPage: 10}).then((data) => {
      dispatch({type: FETCH_ITEMS_SUCCESS, payload: data})
    }).catch(() => {
      dispatch({type: FETCH_ITEMS_ERROR})
    })
  }

  function renderList() {
    return state.items.map(item => (
      <List.Item key={item.id}>
      <Image avatar src={item.image} />
      <List.Content>
        <List.Header>{item.name} - <StyledPrice>
            {item.current_price}
          </StyledPrice></List.Header>
        <StyledItemDetails>

        </StyledItemDetails>
      </List.Content>
    </List.Item>
    ))
  }

  if (state.isFetching) {
    return (
      <h1>Loading  lists of crypto coins!</h1>
    )
  }

  if (state.isFetched) {
    return  (
      <>
        <Segment>
          {"List of crypto coins!"}
        </Segment>
        <List selection size={"large"} verticalAlign="middle">
          {renderList()}
        </List>
      </>
    )
  }
  
  
}
export default CoinList
