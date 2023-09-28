import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
function Cate() {
  return (
    <div id='cate' className='container-fluid' >






    <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:"white",color:"black",border:"none"}} id="dropdown-basic">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <div className='col-12 d-flex' style={{width:"1100px",textAlign:"center"}}>
      <div className='col-4 ' >
          <DropdownItem href='#'style={{textDecoration:"none",fontSize:"23px",color:"blue"}}>Vehicles</DropdownItem>
           
          <p style={{cursor:"pointer"}}>Suv</p>
          <p style={{cursor:"pointer"}}>Audi</p>
          <p style={{cursor:"pointer"}}>Bugatti</p>
          <p style={{cursor:"pointer"}}>Mercedes</p>
          <p style={{cursor:"pointer"}}>Tata</p>
          <p style={{cursor:"pointer"}}>Lampoghorni</p>
          </div>
        <div className='col-4'>
          <DropdownItem href='#' style={{textDecoration:"none",fontSize:"23px",color:"blue"}}>Gadjets</DropdownItem>
          
          <p style={{cursor:"pointer"}}>Watches</p>
          <p style={{cursor:"pointer"}}>Mobiles</p>
          <p style={{cursor:"pointer"}}>Laptops</p>
          <p style={{cursor:"pointer"}}>Speakers</p>
          <p style={{cursor:"pointer"}}>Headphones</p>
          </div>
        <div className='col-4' >
          <DropdownItem href='#' style={{textDecoration:"none",fontSize:"23px",color:"blue"}}>Properties</DropdownItem>
          <p style={{cursor:"pointer"}}>Houses</p>
          <p style={{cursor:"pointer"}}>Lands</p>
          <p style={{cursor:"pointer"}}>Rooms</p>
          <p style={{cursor:"pointer"}}>Garden</p>
          </div>
          
          </div>
      </Dropdown.Menu>
    </Dropdown>

    <a href="" style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>Cars</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>Motorcycles</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>Moblie phones</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}> For sale: house & Apartments</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>Scooters</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>commercial & Other Vehicles</a>
    <a href=""style={{marginLeft:"8px",color:"black", textDecoration:"none",marginTop:"4px"}}>For Rent: house & Apartments</a>




    </div>
  )
}

export default Cate