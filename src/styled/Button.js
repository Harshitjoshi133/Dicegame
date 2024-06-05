import styled from "styled-components"
export const Button=styled.button
`
  padding: 10px 18px;
  color:white;
  background: #000000;
  border-radius: 5px;
  font-size:16px;
  min-width:220px;
  border:solid 1px transperant;
  transition:0.4s background ease-in;
  cursor:pointer;
  &:hover{
    background-color:white;
    color:black;
    border: solid 1px black;
    transition:0.3s background ease-in;
    
  }
 
`