import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  ///fake data

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
           <img src={images[0]} alt="" className="" onClick={e=>setSelectedImg(0)} />
           <img src={images[1]} alt="" className="" onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
            <img src={images[selectedImg]} alt="" className="" />
        </div>
      </div>
      <div className="right">
        <h1 className="">Title</h1>
        <span className="price">$230</span>
        <p className="">Shopping for new dresses? From casual denim dresses to floral spring dresses, you can never have enough dresses in your wardrobe! The best thing about dresses is how versatile they are. You can dress them up with heels and statement jewellery or create a low-key look by adding trainers...</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev)=>prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
           <div className="item">
              <FavoriteBorderIcon/> ADD TO WISH LIST
           </div>
           <div className="item">
              <BalanceIcon/> ADD TO COMPARE
           </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}
