import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from './Data'

const ViewEm = () => {
    var [users,setUsers] =useState([])
    var [update,setUpdate]=useState(false)
    var[singleValue,setsingleValue] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    const deleteValue =(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+id)
        .then((responce)=>{
            alert(responce.data)
            window.location.reload(false)
        })
        .catch((err)=>console.log(err)) 
    }
    const updateValues=(val)=>{
        console.log("update")
         setUpdate(true)
         setsingleValue(val)
    }
  
        var finalJSX=<TableContainer>
            <Table>
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Salary</TableCell>
            </TableRow>
            </TableHead>
            {users.map((val,i)=>{
            return (
            <TableRow>
                <TableCell>{val.ename}</TableCell>
                <TableCell>{val.eage}</TableCell>
                <TableCell>{val.eposition}</TableCell>
                <TableCell>{val.esalary}</TableCell>
                <TableCell>
                    <Button onClick={()=>deleteValue(val._id)}>
                     DELETE
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={()=>updateValues(val)}>
                    UPDATE
                    </Button>
                </TableCell>
              
            </TableRow>
            )})}
            </Table>
        </TableContainer>
        if(update) finalJSX = <Data data={singleValue}
        method='put'/>
   
  return finalJSX
  }

export default ViewEm