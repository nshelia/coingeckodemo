import React from 'react'
import { Grid, Header, Image, List } from 'semantic-ui-react'

import { StyledItemHeader } from '../styled'

function CoinItem({ item, onItemSelect }) {
  return (
    <List.Item onClick={() => onItemSelect(item.id)}>
      <Grid columns='equal'>
        <Grid.Column width={6}>
          <List.Header>
            <StyledItemHeader>
              <Image avatar src={item.image} />
              <span style={{ paddingLeft: '5px' }}>
                {item.symbol} - {item.name}
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
  )
}

export default CoinItem
