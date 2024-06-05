import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/Gameplay";



function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggle_gameplay=()=>{
    setIsGameStarted(prev => !prev);
  }
  return(
    <>{isGameStarted ? <GamePlay/>: <StartGame toggle={toggle_gameplay}/>}</>
  );
}

export default App
