import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {

    
var [count,setCounter]=useState(0)
const submithandler1=()=>{
        setCounter(count+1)
    }
    const submithandler2=()=>{
        setCounter(count-1)
    }
    const handleInput=(e)=>{
        console.log(e.target.value)
        setCounter(e.target.value)
    }
  return (
    <div> 
        <Typography variant='h6'>
            Welcome {count}
        </Typography>
        <Button variant='contained' onClick={submithandler1}>+</Button>
        <Button variant='contained' onClick={submithandler2}>-</Button><br />
        
    </div>
  )
}

export default Add