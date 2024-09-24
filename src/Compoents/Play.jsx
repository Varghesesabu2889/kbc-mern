import React, { useRef } from 'react'

const Play = ({setUserName}) => {
    const inputRef = useRef();

const handleClick=()=>{
   inputRef.current.value && setUserName(inputRef.current.value)
    
}

  return (
    <div className='start'>
        <div className="kbc_game">
            <h3>🏆 Let's Play Ningalkkum Aakaam Kodeeshwaran using mern stack questions 🏆</h3>
            <input placeholder='Enter your name' className='startInput' ref={inputRef} />
            <button className='startButton'onClick={handleClick}>Start the Game </button>
        </div>

    </div>
  )
}

export default Play