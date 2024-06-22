import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var[x,setx]=useState();

    const reacthandler=()=>{
        setx("React")
        
    }
    const angularhandler=()=>{
        setx("Angular")
        
    }
    const viewhandler=()=>{
        setx("View")
        
    }
    useEffect(()=>{
        reacthandler();
    },[])

  return (
    <div>
        <Typography variant='h6'>
             weicome {x}
        </Typography><br /><br />
        <Button variant='contained' onClick={reacthandler} color='inherit'>React</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={angularhandler} color='inherit'>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={viewhandler} color='inherit'>View</Button>&nbsp;&nbsp;
    </div>
  )
}

export default SampleUse