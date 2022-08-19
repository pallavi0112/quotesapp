import React from 'react'
import './Container3.css';
import Card from '../Card/Card';
function Container3(props) {
  return (
    <div className='container3'>
        <div className='flex'>
        {
            props.Data.map((val,index)=>{
               return <div><Card key={index} id={index} img={val.img} name={val.Name}/></div>
            })
        }
        </div>
    </div>
  )
}

export default Container3