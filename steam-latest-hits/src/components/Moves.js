import { useState } from "react";

function Moves(props) {
  const {moves} = props;
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisible = () => {
    setIsVisible((currentState) => !currentState)
  }

  return (
    <div>
      <button onClick={toggleVisible}>Move List</button>
      {!isVisible ? <></> : (
        <ul>
          {moves.map((moveData, index) => {
            return <li key={index}> {moveData.move.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}

export default Moves;