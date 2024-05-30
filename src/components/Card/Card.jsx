import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';

export default function Card({item}) {
  return (
    <Link to={`/product/${item.id}`} className='link'>
         <div className='card'>
             <div className="image">
                {item.isNew && <span>New Season</span>}
                 <img src={item.img} alt="" className="mainImg" />
                 <img src={item.img2} alt="" className="secondImage" />
             </div>
             <h2 className="">{item.title}</h2>
             <div className="prices">
                 <h3 className="">${item.oldPrice}</h3>
                 <h3 className="">${item.price}</h3>
             </div>
         </div>
    </Link>
  )
}
