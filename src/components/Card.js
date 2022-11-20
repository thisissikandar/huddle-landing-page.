import React from 'react';
import "./Card.css";

const Card = (props) => {
  return(
    <>
     {
        props.data?.map((item, index)=>{
            return <section key={index}>
            <div className="product-1">
            <div className="product-left">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="product-right">
              <img src={item.images} alt="card images" />
            </div>
          </div>
        </section>
        })
     }
    </>
  )
}

export default Card