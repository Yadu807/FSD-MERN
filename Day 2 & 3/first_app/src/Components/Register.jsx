import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        
        <h1>Login</h1><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
        <Button variant="contained">Login</Button>
    </div>
  )
}

export default Register