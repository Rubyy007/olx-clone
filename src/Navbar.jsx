import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

    
function NavBar({setData}) {

  return (

    
        <Navbar id='Navv' expand="sm" className="bg-body-tertiary sticky-top mb-3">
          <div className='container-fluid mx-2'>
            <Navbar.Brand href="/" style={{fontWeight:"700"}}>OLX</Navbar.Brand>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              
      
      <select className='mx-3' name="selectedCountry" style={{borderRadius:"4px ",width:"220px",height:"45px",borderWidth:"2px",borderColor:"rgb(1, 65, 22)"}}>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="russia">Russia</option>
      </select>
    
             
                <input  type='text' placeholder='search cars,phones here' style={{width:"700px",height:"45px",borderColor:"rgb(1, 65, 22)",borderRadius:"4px 0px 0px 4px "}} onChange={(e)=>setData(e.target.value)}></input><button className="fa fa-search" style={{background:" rgb(1, 65, 22)",width:"40px",display:"flex",justifyContent:"center",border:"none",alignItems:"center"}} onClick={()=>{alert("Item Not Found!")}}></button>
    
                
        <select className='mx-3' name="selectedLang" style={{width:"90px",border:"none"}} >
        <option value="india">English</option>
        <option value="usa">Tamil</option>
        <option value="russia">Russian</option>
      </select> 
              
      <Link type='button' to="/login" id='login'>Login</Link>
      <button className="button-85 mx-2" role="button">Sell</button>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    
    
    
  
  )
}

export default NavBar