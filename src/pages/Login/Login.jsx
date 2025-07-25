import React, { useState } from 'react';
import './Login.css'
import logo from "../../assets/logo.png"
import { login, signup } from '../../firebase';
import spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [show,setshow]=useState("Sign In");
  const [name, setname]= useState("")
  const [email, setemail]= useState("")
  const [password, setpassword]= useState("")
  const[loading, setloading]= useState(false)

  const user_auth = async (event)=>{
    event.preventDefault();
    setloading(true);
    if(show==="Sign In"){
      await login(email, password)
    }
    else{
      await signup(name,email,password)
    }
    setloading(false);
  }

  return (
    loading?<div className="loader">
      <img src={spinner} alt="" />
    </div>:
    <div className="Login">
      <img src={logo} alt='' className='Login-logo'/>
      <div className='Login-Form'>
        <h1>{show}</h1>
        <form>
          {show==="Sign Up"?<input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
          <input  value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder='Your E-mail' />
          <input  value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{show}</button>
          <div className="Form-help">
            <div className="Remember">
              <input type="checkbox" />
              <label>
                Remember Me
              </label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
           {show==="Sign In"?<p>New to Netflix? <span onClick={()=>{{setshow("Sign Up")}}}>Sign Up</span></p>:
          <p>Already have an account? <span onClick={()=>{{setshow("Sign In")}}}>Sign In</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login