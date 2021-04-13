import React from 'react'
import { Placeholder, Segment } from 'semantic-ui-react'

import { StyledCenteredImage } from '../styled'

function CoinInfoPlaceholder() {
  return (
    <Segment textAlign='center'>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
      </Placeholder>
      <StyledCenteredImage>
        <Placeholder style={{ height: 150, width: 150 }}>
          <Placeholder.Image />
        </Placeholder>
      </StyledCenteredImage>
      <Segment>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Segment>
  )
}

export default CoinInfoPlaceholder
