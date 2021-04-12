import React from 'react'
import { Grid, Header, Image, List, Placeholder, Segment } from 'semantic-ui-react'

import { StyledItemHeader, StyledPlaceholders } from '../styled'

function ItemList({ items, placeholders }) {
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
    return items.map((item) => (
      <List.Item key={item.id}>
        <Grid columns='equal'>
          <Grid.Column width={6}>
            <List.Header>
              <StyledItemHeader>
                <Image avatar src={item.image} />
                <span style={{ paddingLeft: '5px' }}>
                  {item.symbol.toUpperCase()} - {item.name}
                </span>
              </StyledItemHeader>
            </List.Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <StyledItemHeader>
              <Header as='h4' color='green'>
                {item.current_price}€
              </Header>
            </StyledItemHeader>
          </Grid.Column>
          <Grid.Column width={3}>
            <StyledItemHeader>
              <Header as='h4' color='green'>
                {item.high_24h}€
              </Header>
            </StyledItemHeader>
          </Grid.Column>
          <Grid.Column width={3}>
            <StyledItemHeader>
              <Header as='h4' color='green'>
                {item.low_24h}€
              </Header>
            </StyledItemHeader>
          </Grid.Column>
        </Grid>
      </List.Item>
    ))
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
