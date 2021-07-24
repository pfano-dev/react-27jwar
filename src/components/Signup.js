import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
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




const styles = { borderRadius: '0px', height: '550px',width:'450px'};
const styleon = {borderRadius: '0px', height: '550px',width:'350px',marginLeft:'150px'};





export default function Signup() { 
  const emailRef  = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

async function handleSubmit(e) {
    e.preventDefault()

      if (passwordRef.current.value !== passwordConfirmRef.current.value)  {
      return setError('Password do not match')
      }
      history.push("/signin")
      try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
       
      } catch {
        setError('Failed to creat an account')
      }
       setLoading(false)
  }

  return (

    <div>
<Grid className="mainGrid " container spacing={0}>
        <Grid className="firstinGrid " item xs={4}>
          <Paper style={styles} className="paperone" />
        </Grid>
        <Grid className="firstinGrid " item xs={3}>
          <Paper style={styleon} className="papertwo">


            <Typography> <h1 style={{ marginLeft: '80px' }}> <AddCircleIcon style={{ fontSize: '30px', color: '#0099FF' }} />To do list</h1><p style={{ marginLeft: '90px', marginBottom: '10px', marginTop: '10px'}} >sign in to your account </p></Typography>

          {error && <Alert variant="danger">{error}</Alert>}

          
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
             

            <Typography> <input 
    type="email" ref={emailRef} required style={{border: 'none',fontSize: '18px',  backgroundColor: '#EBEBEB',  marginLeft:'65px', width: '220px', height: '35px', marginBottom: '20px', borderRadius: '5px'}}placeholder="email"/> </Typography>

            </Form.Group>
            <Form.Group id="password">
             

            <Typography> <input  type="password" ref={passwordRef} required  style={{border: 'none', fontSize: '18px',backgroundColor: '#EBEBEB',marginLeft:'65px', width: '220px', height: '35px', marginBottom: '50px', borderRadius: '5px' }} placeholder="password" /> 
            </Typography>

            </Form.Group>

            <Form.Group id="password-confirm">
              

            <Typography> <input   type="password" ref={passwordConfirmRef} required style={{border: 'none', fontSize: '18px',backgroundColor: '#EBEBEB',marginLeft:'65px', width: '220px', height: '35px', marginBottom: '50px', borderRadius: '5px' }} placeholder="passwordConfirm" /> 
            </Typography>
            </Form.Group>





            <Button 
            
            disabled=""  type="submit"
            style={{ textTransform: 'lowercase',    marginTop: '25px',  width: '250px',  marginLeft: '50px',  color: '#FFFFFF',  backgroundColor: '#0099FF' }}  variant="contained"> sign in </Button>

            <p style={{color: 'gray',marginLeft: '150px',marginBottom: '5px',marginTop: '5px'}}>OR</p>
          

            <Button            
            style={{ marginTop: 'px', width: '250px', marginLeft: '50px', color: '#0000000', backgroundColor:'#FFFFFF', marginBottom: '70px' }} variant="contained" > continue with Google</Button>

          </Form>
       


          <Typography style={{color: 'black',marginTop: '0px',  marginLeft: '60px'}}> Already have and account?
            <Link to="/Signin" > sign up </Link></Typography>

  

    </Paper>
        </Grid>
      </Grid>
    </div>


  );
}