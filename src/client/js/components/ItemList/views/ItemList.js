import React from 'react'
import { Grid, List, Placeholder, Segment } from 'semantic-ui-react'

import { StyledPlaceholders } from '../styled'
import CoinItem from './CoinItem'

function ItemList({ items, placeholders, onItemSelect }) {
  function renderList() {
    if (placeholders) {
      return Array(10)
        .fill(null)
        .map((item, index) => (
          <Placeholder key={index}>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        ))
    }
    return items.map((item) => <CoinItem onItemSelect={onItemSelect} key={item.id} item={item} />)
  }

  return (
    <Segment>
      <List selection size={'big'} verticalAlign='middle'>
        <Segment>
          <Grid columns='equal'>
            <Grid.Column width={6}>{'Coin name'}</Grid.Column>
            <Grid.Column width={3}>{'Coin price'}</Grid.Column>
            <Grid.Column width={3}>{'High 24H Price'}</Grid.Column>
            <Grid.Column width={3}>{'Low 24H Price'}</Grid.Column>
          </Grid>
        </Segment>
        {placeholders ? <StyledPlaceholders>{renderList()}</StyledPlaceholders> : renderList()}
      </List>
    </Segment>
  )
}

export default ItemList
