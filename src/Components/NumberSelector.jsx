import styled from "styled-components"
import { useState } from "react";
const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arraynumber=['1','2','3','4','5','6'];
    console.log(selectedNumber);
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
    
  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className="flex">
        {
            arraynumber.map((value,i)=>(
                <Box 
                key={i} 
                onClick={()=>numberSelectorHandler(value)}
                isSelected={selectedNumber === value}>{value}
                </Box>
            ))
        }

    </div>
    <p>Select number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .error{
        color: red;
    }
    .flex{
        display: flex;
        gap:24px;
    }
    .p{
        font-size: 24px;
        font-weight: 700px;
    }
`
const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-weight: 700px;
    font-size: 24px;
    background-color : ${props => props.isSelected ? "Black" : "White"};
    
    color: ${props => props.isSelected ? "White" : "Black"};

`