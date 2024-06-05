import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import Totalscore from "./Totalscore"
import RollDice from "./RollDice"
import Rules from "./Rules"
import { Button } from "../styled/Button"
import { useState } from "react"

const Gameplay = () => {
  const[score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const[error,setError]=useState("");
  const[showRules,setShowRules]=useState(false);
  const resetScore=()=>{
    setScore(0);
  }
  const generaterandomnumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
  };
  
  const rollDice=()=>{
    if(!selectedNumber){
      setError("You have not Selected a number");
      return;
    }
    setError("");
    const randomnumber=generaterandomnumber(1,6);
    setCurrentDice((prev)=>randomnumber);
    
    if(selectedNumber == randomnumber){
      setScore(prev=>prev+randomnumber);

    }
    else{
      setScore(prev=>prev-2);
    }
    setSelectedNumber(undefined);
  }
  return (
    <MainContainer>
      <div className="top-section">
      <Totalscore score={score}></Totalscore>
      <NumberSelector selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        error={error}
        setError={setError}
      ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice}
      rollDice={rollDice}
      >

      </RollDice>
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
      </div>
      {showRules&& <Rules/>}
    </MainContainer>
    
  )
}


export default Gameplay
 const MainContainer=styled.main`
    padding:70px;
    .top-section{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:10px;
      
    }
 `