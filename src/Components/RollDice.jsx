import { useState } from "react"
import styled from "styled-components"


const RollDice = ({currentDice,rollDice}) => {
    

  return (
    <DiceContainer>
        <div className="Dice" onClick={rollDice}>
            <img src={`/images/dices/dice_${currentDice}.png`} alt={`${currentDice}`} />

        </div>
        <p>Click Here to Roll</p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 48px;
    align-items: center;
    .Dice{
        cursor:pointer;

    }
`