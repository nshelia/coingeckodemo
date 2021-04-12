import React from 'react'
import { Card, Header, Image, Segment } from 'semantic-ui-react'

import { StyledCoinInfoWrapper } from '../styled'

function CoinInfo({ item }) {
  return (
    <Segment>
      <StyledCoinInfoWrapper>
        <Header size='large'>
          {item.name} - {item.symbol}
        </Header>
        <Image src={item.image} size='small' />
        {item.algorithm && (
          <Segment raised>
            <Header>Hashing Algorithm: {item.algorithm}</Header>
          </Segment>
        )}
        {item.marketCap && (
          <Segment raised>
            <Header>
              Market Cap in Euro: <span>{item.marketCap}€</span>
            </Header>
          </Segment>
        )}
        {item.date && (
          <Segment raised>
            <Header>Genesis Date: {item.date}</Header>
          </Segment>
        )}
        {item.homepage && (
          <Segment raised>
            <Header>
              Homepage: <a href={item.homepage}>{item.homepage}</a>
            </Header>
          </Segment>
        )}
        <Card fluid description={item.description} />
      </StyledCoinInfoWrapper>
    </Segment>
  )
}

export default CoinInfo
