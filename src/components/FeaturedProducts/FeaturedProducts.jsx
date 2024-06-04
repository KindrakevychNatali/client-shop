import React from 'react';
import "./FeaturedProducts";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({type}) {
  
  const {data, loading, error} = useFetch(
    `/product?populate=*&[filters][type][$eq]=${type}`
  );

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
            {error
                ? "Something went wrong!"
                : loading 
                ? "loading"
                : data?.map((item) => 
                  <Card item={item} key={item.id}/>
                )
            } 
         </div>
    </div>
  )
}
