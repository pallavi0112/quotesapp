import React from 'react'
import './Circle.css'
import img from '../../Images/img11.jpg'
function Circle() {
  return (
    <section className='circle'>
            <div className='inner-circle'>
                <img src={img} alt="img"></img>
            </div>
    </section>
  )
}

export default Circle