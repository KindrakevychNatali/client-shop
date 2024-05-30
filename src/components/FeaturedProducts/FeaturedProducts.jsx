import React from 'react';
import "./FeaturedProducts";

export default function FeaturedProducts({type}) {
  //fake data
  
    return (
    <div className='featuredProducts'>
         <div className="top">
            <h1>
                {type} products
            </h1>
            <p>
              We are a global brand for all girls, we believe in affordable fashion for all. We are the number 1 destination for fashion and lifestyle for all the occasions in your life.
            </p>
         </div>
         <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
         </div>
    </div>
  )
}
