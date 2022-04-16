import React from 'react'
import React, { useState } from 'react';
import {Card , Button, Stack} from 'react-bootstrap';
import '../component/Component.css'
import '../pages/Carddetails'
import Carddetails from '../pages/Carddetails';
import ProductItems from "../Data"
import { Link } from 'react-router-dom';

const CardItem = () => {
  const [count, setCount] = useState(0);
  const renderCard = (card , index)=>{
    return(
      <Card style={{ width: '18rem' , margin : '2em' }} key={index}>
          <Card.Img variant="top" src={card.image} style={{height:"250px"}} />
          <Card.Body >
              <Card.Title >{card.title}</Card.Title>
              <Card.Text >
                  {card.text}
              </Card.Text>
              <div>You will add {count} items to cart</div>
              <Stack className='col-md-6 mx-auto'>
              <button onClick={() => setCount(count + 1)} className='btn' variant="secondary" style={{borderRadius:"25px", backgroundColor:"rgb(233, 183, 114)" , borderColor:"rgb(233, 183, 114)", color:"white" }} >+</button>
              <a href={card.href} className='btn' variant="secondary" style={{borderRadius:"25px", backgroundColor:"rgb(233, 183, 114)" , borderColor:"rgb(233, 183, 114)", color:"white" }} >Add to cart</a>
              <button onClick={() => setCount(count - 1)} className='btn' variant="secondary" style={{borderRadius:"25px", backgroundColor:"rgb(233, 183, 114)" , borderColor:"rgb(233, 183, 114)", color:"white" }} >-</button>
              </Stack>
          </Card.Body>
      </Card>
    )
  }
  return (
    <div className='carditem'>{ProductItems.map(renderCard)}</div>
  )
}

export default CardItem