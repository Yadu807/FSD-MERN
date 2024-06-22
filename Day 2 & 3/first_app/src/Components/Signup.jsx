import React from 'react'

const Signup = () => {
  return (
    <div>
        {/* <h1>WELCONE REACT</h1> */}
        <br /><br /><br />
        <p>
            <h1>Sign Up</h1>
            Username <input type="text" id="username"></input><br /><br />
            Password :<input type='password' id="pass"></input><br /><br />
            <input type="submit" id='sub' />
        </p>
    </div>
  )
}

export default Signup