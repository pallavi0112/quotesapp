import React from 'react'
import './Card.css';
function Card(props) {
  return (
    <div className='card '>
       <div className='imgBx'>
           <img src={props.img}  alt="Quotes"/>
       </div>
    </div>
  )
}

export default Card