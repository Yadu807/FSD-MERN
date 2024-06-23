import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                {/* <Typography variant='h5'>
                    My app
                </Typography>&nbsp; */}
            <Button variant='contained' color='warning'>
                <Link to='/'>ADD</Link>
            </Button>&nbsp;
            
            <Button variant='contained' color='secondary'> 
              <Link to='/v'>VIEW</Link>
            </Button>&nbsp;
            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar