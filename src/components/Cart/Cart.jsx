import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, removeItem } from '../../redux/cartReducer';
import { makeRequest } from "../../makeRequest";

export default function Cart() {

  const products = useSelector(state=>state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51PRDGwRrR9MNYBHvU3ldijxQ1tTnbDDYbGteghROmk36SjihmVOeM5TRh0rvtn62qmc08lIhY9RDmwa1q5bPiHxu00a3Lqz6be'
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item=>(
            <div className='item' key={item.id}>
                <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 50)}</p>
                    <div className="price">{item.quantity} * ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>{totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}
