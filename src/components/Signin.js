import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap"
import "firebase/auth"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"

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
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';
import 'firebase/analytics';
import React from "react";
import "./style.css";
import{v4 as uuidv4} from "uuid";
import React,{useState} from "react";
import "./style.css";
import Form from './comp/Form';
import TodosList from './comp/TodosList';
import  ReactCalendar from './comp/ ReactCalendar';





const style = { borderRadius: '0px', height: '550px', width:'450px'};
const styleone = {borderRadius: '0px', height: '550px', width:'350px',marginLeft:'150px'};






export default function Signin() { 
  const emailRef  = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


async function handleSubmit(e) {
    e.preventDefault()

      try {
        setError('')
        setLoading(true)
        await signin(emailRef.current.value, passwordRef.current.value)
      history.push("/")
      } catch {
        setError('Failed to sign In')
      }
       setLoading(false)
  }

  return (

    <div>    
<Grid className="mainGrid "  container spacing={0}>
        <Grid className="firstinGrid " item xs={4}>
          <Paper style={style} className="paperone"></Paper>
        </Grid>

        
        <Grid className="firstinGrid " item xs={3}>
          <Paper style={styleone} className="papertwo" >



    
    
   
  
     
       
          <Typography  ><h1 style={{ marginLeft:'80px' }}> <AddCircleIcon style={{  fontSize: '30px' , color:'#0099FF' }}/>To do list</h1><p style={{ marginLeft:'90px', marginBottom:'10px', marginTop:'40px', }}>sign in to your account</p></Typography >
          
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">



            <Typography  > <input  type="email" ref={emailRef} required
      style={{border:"none", fontSize: '18px' ,backgroundColor:'#EBEBEB',  marginLeft:'65px', width:'220px',height:'35px', marginBottom:'30px', marginTop:'30px', borderRadius:'5px' }} placeholder="Username"/> </Typography  >
             
            </Form.Group>

            <Form.Group id="password">

            <Typography> <input type="password" ref={passwordRef} required
  style={{border:"none",fontSize:'18px',backgroundColor:'#EBEBEB', marginLeft:'65px',width:'220px',height:'35px',marginBottom:'20px',borderRadius:'5px'}}placeholder="password"/> 

  </Typography>
  
            </Form.Group>


            <Link to="/forgot-passsword"   style={{marginLeft:'110px'}} >Forgot Password</Link>



            <Button
disabled="" type="submit"
   style={{ marginBottom:'80px', marginTop:'50px',width:'200px', marginLeft:'75px',color:'#FFFFFF'  ,backgroundColor:'#0099FF' }} variant="contained" >  sing in</Button>
   
          </Form>
         
          <Typography style={{marginLeft:'78px'}} > 
      Need an account? <Link to="/signup">Sign Up</Link>
      </Typography>
  
  

    </Paper>
        </Grid>
      </Grid>
    </div>


  );
}