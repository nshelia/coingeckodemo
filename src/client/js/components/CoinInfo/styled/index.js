import styled from 'styled-components'

export const StyledOverlay = styled.div`
  width: 100%;
  height: 200px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(50, 50, 50, 0.8)),
    to(rgba(80, 80, 80, 0.2)),
    color-stop(0.5, #333333)
  );
`

export const StyledCoinInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
  }
`

export const StyledCenteredImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
