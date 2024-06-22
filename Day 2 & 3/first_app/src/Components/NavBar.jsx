import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>
                    My app
                </Typography>&nbsp;
            <Button variant='contained' color='warning'>
                <Link to='/'>Login</Link>
            </Button>&nbsp;
            
            <Button variant='contained' color='secondary'> 
              <Link to='/sin'>Sign up</Link>
            </Button>&nbsp;
            <Button variant='contained' color='success'> 
              <Link to='/sb'>State</Link>
            </Button>&nbsp;
            <Button variant='contained' color='error'> 
              <Link to='/ad'>Add</Link>
            </Button>&nbsp;
            <Button variant='contained' color='inherit'> 
              <Link to='/lm'>List</Link>
            </Button>&nbsp;
            <Button variant='contained' color='info'> 
              <Link to='/ap'>API</Link>
            </Button>&nbsp;
            <Button variant='contained' color='info'> 
              <Link to='/su'>Sample</Link>
            </Button>&nbsp;
            <Button variant='contained' color='inherit'> 
              <Link to='/gc'>card</Link>
            </Button>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar