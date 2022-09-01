import React from 'react'
import './Login.css'
import fb from './Images/fb.png';
import fbtext from './Images/fb-text6.png'
import Button from '@mui/material/Button';
import {auth} from './firebase'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// import { useStateValue } from './StateProvider';
// import {actionTypes} from './reducer';
import {UserAuth} from './AuthContext';

function Login() {
  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () =>{
   
  try{
   
    await googleSignIn();

  }catch(error){

  console.log(error);
  }  

}; 

  return (
    <div className='login'>
     <div className="login_logo">
     <img src={fb} alt="" />
     <img src={fbtext} alt="" className='fbtext'/>
     </div> 
     <Button type='submit' onClick={googleSignIn}>
     Sign In  
     </Button>
    </div>
  )
}

export default Login
