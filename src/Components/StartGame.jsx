import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="/public/images/dices.png" alt="amazon"/>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div
`
    max-width:1180px;
    display:flex;
    margin: 0 auto;
    align-items:center;

    .content{
      h1{
        font-size:96px;
        white-space:nowrap;
      }
    }

`

