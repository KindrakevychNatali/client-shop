import React from 'react';
import './List.scss';
import Card from '../Card/Card';

export default function List() {
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id} />
    ))}</div>
  )
}
