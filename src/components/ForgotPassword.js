import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link } from "react-router-dom"

import React from "react";
import { BrowserRouter as Router,Switch,Route,Link,useHistory,useLocation,useParams} from "react-router-dom";
import React,{useState} from 'react';
import{BrowserRouter  as Router, Route, Switch, Link} from "react-router-dom";
import Sign from "./Pages/Sign";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css";
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Switch, Link} from "react-router-dom";
import React ,{useState , useEffect} from "react";
import "./style.css";
import{v4 as uuidv4} from "uuid";
import React,{useState} from "react";
import Form from './comp/Form';
import TodosList from './comp/TodosList';
import  ReactCalendar from './comp/ ReactCalendar';



const style={ borderRadius: '0px', height: '500px',}
const styleone={borderRadius: '0px', width:"900px", height: '500px'}



export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div>
<Grid className="mainGrid "  container spacing={0}>
<Grid className="firstinGrid " item xs={7}>
<Paper style={styleone} className="papertwo" >

<Typography  ><h1 style={{ marginLeft:'360px' }}> <AddCircleIcon style={{  fontSize: '30px' , color:'#0099FF' }}/>To do list</h1>
<p style={{ marginLeft:'290px', marginBottom:'60px',  marginTop:'5px', }}>Enter your email adress to reset password or email</p></Typography  >

{error && <Alert style={{  textAlign:"center"}} variant="danger">{error}</Alert>}
          {message && <Alert  style={{textAlign:"center"}} variant="success">{message}</Alert>}

<Typography style={{ fontSize: '18px',marginLeft: '280px',marginBottom: '20px' }}>
  Email Address <input  style={{ border: 'none', fontSize: '18px', backgroundColor: '#EBEBEB',  marginLeft: '15px',   width: '270px', height: '35px', marginBottom: '20px',borderRadius: '5px' }} type="email" ref={emailRef} required /> </Typography>
 
     <Form style={{ marginBottom: '100px'}} onSubmit={handleSubmit}>
            <Form.Group id="email">
            </Form.Group>
            <Button style={{textTransform: 'lowercase',  marginTop: '15px', width: '450px', marginLeft: '260px', color: '#FFFFFF', backgroundColor: '#0099FF' }} disabled={loading}  type="submit">
              Reset Password
            </Button>
          </Form>


        
            <Link to="/signin" style={{ fontSize: '18px',marginLeft: '290px',marginBottom: '20px' }} >Login</Link>
      
      
   
        <Link to="/signup" style={{fontSize: '18px', marginLeft: '250px',marginBottom: '20px' }} >Sign Up</Link>

  </Paper>
</Grid>
        </Grid>
      </div>
   
  )
}
