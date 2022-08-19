import React from 'react'
import './Container2.css';
import Card from '../Card/Card';
function Container2(props) {
  return (
    <section>
    <div className='container2'>
        <div className="grid">
           {
            props.Data.map((val,index)=>{
                console.log(val)
              return <Card key={index} img={val.img} name={val.Name}/>
            })
           }
        </div>
    </div>

    </section>
  )
}

export default Container2