import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
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
import Form from './Form';
import TodosList from './TodosList';
import  ReactCalendar from './comp/ ReactCalendar';


const styles = { borderRadius: '0px', height: '550px',width:'220px',marginLeft:'50px'};
const styleon = {borderRadius: '0px', height: '550px',width:'450px',marginLeft:'100px'};
const style = {borderRadius: '0px', height: '550px',width:'220px',marginLeft:'251px'};

export default function Todo() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  return (


<div>


<Grid className="mainGrid "  container spacing={0}>
<Grid className="firstinGrid " item xs={2}>
 <Paper style={styles} className="papertwo">
<input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"170px", height:'30px',fontSize:'15px', margin:'15px', textAlign:"center" }} type="text" placeholder="search"  />

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '30px', textDecoration:"none" }} > Important <i style={{color: '#ffff00'}} class="fa fa-star" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '9px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '50px', textDecoration:"none" }} > Calender <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Notes <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '230px',marginRight: '0px', marginLeft: '10px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: '#01579b', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add new list <i style={{color: '#01579b'}} class="fa fa-plus" aria-hidden="true"></i></Link></Typography  >
   </Paper>
        </Grid>

        <Grid className="firstinGrid " item xs={4}> <Paper style={styleon} className="paperone">

        <Typography style={{fontWeight:"bold", fontSize:'30px', color: '#FFFFFF', marginLeft:"0px"}}>My day  <i style={{  color: '#e65100', marginLeft:"270px"}}  class="fa fa-sun-o" aria-hidden="true"></i>
        </Typography>





        </Paper>
        
       

        </Grid>
        <Grid className="firstinGrid " item xs={2}>
          <Paper style={style} className="papertwo" >

 <Typography>
   
 {error && <Alert variant="dnager">{error}</Alert>}
          {currentUser.email}
   <h2 style={{ marginLeft:'30px' }}> <AddCircleIcon style={{  fontSize: '20px' , color:'#0099FF' }}/>To do list</h2></Typography>
<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link to="/Main" style={{color:'black', marginTop:'720px',marginRight:'60px', marginLeft:'0px',textDecoration:"none" }} > Add new list </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '0px', textDecoration:"none" }} > Add to my day </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add notes</Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '60px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginLeft: '30px', textDecoration:"none" }} >Add new plan </Link></Typography  >

<Typography style={{ marginTop: '300px', marginLeft: '150px', textDecoration:"none" }} >
<Link  to="/signin" style={{color: 'blue',textDecoration:"none" }} > log out </Link>


<Button variant="link" onClick={handleLogout}>
          Sign Out
        </Button>
</Typography  >




          </Paper>
        </Grid>
        
        
      </Grid>

    </div>



  );
}
