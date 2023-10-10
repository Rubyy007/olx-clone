import React, { useState } from 'react'
import bike from "./pics/bike.jpg"
import lap from "./pics/laptop.jpg"
import car from "./pics/car.jpg"
import car1 from "./pics/car1.jpg"
import Card from 'react-bootstrap/Card';
import mockdata from '../src/pics/olx.json'
import NavBar from './Navbar'

import Cate from "./Cate"
function Menu() {
  const [Data,setData]=useState("")
  const [Cut,setCut]=useState(10)
const LoadMore =()=>{
  setCut((setCut)=>setCut + 10)
}
  
 const Likebtn = ()=>{
 alert("the item added in your fav list")
 }
   
    return (
<>
<NavBar setData={setData} />
<Cate/>
<div id='cards' className='container-fluid mx-5' >
           {mockdata.filter((va)=>{
            if (va == ""){
              return va
            }
            else if(va.carName.toLowerCase().includes(Data.toLowerCase())){
              return va
            }
           }
        
          ).slice(0,Cut).map((val,key)=>

            
     
     <Card key={key} style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
      <Card.Img variant="top" alt='pic error' src={car1} />
        <Card.Body>
          <Card.Title>{val.carName}</Card.Title>
          <Card.Text>
          Rate : {val.money} <br />
          Year of purchasing : {val.year} 
          </Card.Text>

        </Card.Body>
      </Card>
    
            
           )

           }     
      
        <button className="fa fa-heart-o" onClick={Likebtn} id='likebtn' ></button>
     <button className='Loadmore' onClick={LoadMore}>LoadMore</button>
    </div>
  </>
  )
       
}


  




  



export default Menu