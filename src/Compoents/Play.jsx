import React, { useRef } from 'react'
import logo from '../assets/images/raining-money-money.gif'

const Play = ({setUserName}) => {
    const inputRef = useRef();

const handleClick=()=>{
   inputRef.current.value && setUserName(inputRef.current.value)
    
}

  return (
    <div className='start'>
        <div className="kbc_game">
          <h6 className='heading'>Ningalkkum aakaam kodeeshwaran</h6>
        <img src={logo} alt="Iron Man Logo" className="logo" />
            <input placeholder='Enter your name' className='startInput' ref={inputRef} />
            <button className='startButton'onClick={handleClick}>Start the Game </button>
            <h5 className='developer'>Developed by Varghese Sabu </h5>

        </div>


    </div>
  )
}

export default Play