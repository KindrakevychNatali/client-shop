import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';

export default function Card({item}) {
  return (
    <Link to={`/product/${item.id}`} className='link'>
         <div className='card'>
             <div className="image">
                {item?.attributes.isNew && <span>New Season</span>}
                 <img src={import.meta.env.VITE_APP_UPLOAD_URL+item.attributes.img?.data.attributes.url} alt="" className="mainImg" />
                 <img src={import.meta.env.VITE_APP_UPLOAD_URL+item.attributes.img2?.data.attributes.url} alt="" className="secondImage" />
             </div>
             <h2 className="">{item?.attributes.title}</h2>
             <div className="prices">
                 <h3 className="">${item.oldPrice || item?.attributes.price+12}</h3>
                 <h3 className="">${item?.attributes.price}</h3>
             </div>
         </div>
    </Link>
  )
}
