import styled  from "styled-components"

const Totalscore = ({score}) => {
  return (
    <div>
        <ScoreContainer>
            <h1>{score}</h1>
            <p>total score</p>
        </ScoreContainer>
    </div>
  )
}


export default Totalscore
const ScoreContainer=styled.div`
  text-align: center;
  max-width: 100px;
  h1{
    font-size: 80px;
    line-height: 100px;
  }
  p{
    font-size: 24px ;
    font-weight: 500px;
  }
`