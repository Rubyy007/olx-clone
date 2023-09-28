import React from 'react'
import bike from "./pics/bike.jpg"
import lap from "./pics/laptop.jpg"
import car from "./pics/car.jpg"
import car1 from "./pics/car1.jpg"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Menu() {
  
 const Likebtn = ()=>{
 alert("the item added in your fav list")
 }
    return (
<>
<div id='cards' className='container-fluid mx-5' >
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                

        <button className="fa fa-heart-o" onClick={Likebtn} id='likebtn' ></button>
      <Card.Img variant="top" alt='pic error' src={bike} />
        <Card.Body>
          <Card.Title>bicycle</Card.Title>
          <Card.Text>
            Rate = $200 <br />
            2 years used
          </Card.Text>

        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                <button className="fa fa-heart-o"onClick={Likebtn} id='likebtn' ></button>

        <Card.Img variant="top" alt='pic error' src={car1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            RATE = $400<br />
            1 year used

          </Card.Text>

        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                <button className="fa fa-heart-o"onClick={Likebtn} id='likebtn' ></button>

        <Card.Img variant="top" alt='pic error' src={bike} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            RATE = $400<br />
            1 year used

          </Card.Text>

        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                <button className="fa fa-heart-o"onClick={Likebtn} id='likebtn' ></button>

        <Card.Img variant="top" alt='pic error' src={lap} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            RATE = $400<br />
            1 year used

          </Card.Text>

        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                <button style={{backgroundColor:"black",color:"white"}} className="fa fa-heart-o"onClick={Likebtn} id='likebtn' ></button>

        <Card.Img variant="top" alt='pic error' src={car} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            RATE = $400<br />
            1 year used

          </Card.Text>

        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: "22rem", display: "inline-block" }} className='mx-2 my-3'>
                <button className="fa fa-heart-o"onClick={Likebtn} id='likebtn' ></button>

        <Card.Img variant="top" alt='pic error' src={car1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            RATE = $400<br />
            1 year used

          </Card.Text>

        </Card.Body>
      </Card><br/>
      <Link style={{textDecoration:"none",marginLeft:"45%",padding:"4px 8px ",boxShadow:"2px 3px 4px 3px yellow",color:"black"}} to="/load">Load More</Link>
    </div>
  </>
  )
       
}


  




  



export default Menu