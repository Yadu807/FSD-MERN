import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    
    var [fname,setfname]=useState("Yadu")
    var[val,setval]=useState()
    const submithandler=()=>{
        setfname(val)
    }
    const handleInput=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
    
    }
  return (
    <div>
        <TextField variant='outlined' label="djsh" onChange={handleInput}/>
        <Button variant='contained' onClick={submithandler}>submit</Button><br /><br />
        
        <br /><br /><br />
        

    </div>
  )
}

export default StateBasics