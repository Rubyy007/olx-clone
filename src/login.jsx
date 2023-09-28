import React from 'react'
import Cate from './Cate'
import NavBar from './Navbar'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import GoogleLoginButton from 'react-google-button'
import Footer from './Footer'

function Logi1() {
 
    const SignIn =()=>{
        
            alert("Please enter the email and password or Check the email and password is correct")
        
    }
    return (
    <>
    <NavBar/>
   <Cate/>
   <Menu/>
   <div className='container' style={{borderRadius:"15px",width:"26rem",backgroundColor:"#edd4f8",boxShadow:"8px 10px 20px black",position:"absolute",top:"18%",left:"35%"}}>
 


      <form>
        <h3 className='my-3'>Sign In</h3>
        <Link to="/" style={{color:"red",textDecoration:"none",position:"absolute",top:"1%",right:"5%"}}>X</Link>
        <div className="mb-3">
          <label className='my-2'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label className='my-2'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input "
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" onClick={SignIn} className="btn btn-info my-4">
            Submit
          </button>
        </div>
        <div style={{width:"100%"}} className='my-3'>
        <LoginSocialGoogle
        client_id={"302668948409-74spcsl5s0hhad74p763de7lotu5pbfe.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
       
      >
        <GoogleLoginButton  style={{width:"100%"}}/>
      </LoginSocialGoogle>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    
   </div>
<Footer/>
   </>
  )
}

export default Logi1