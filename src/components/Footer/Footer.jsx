import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
        <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
        <h1>About</h1>
          <span>
          LAMASTORE is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.
          The customer is at the heart of our unique business model, which includes design, production, distribution and sales through our extensive retail network.
          </span>
        </div>
        <div className='item'>
        <h1>Contact</h1>
          <span>
          You can get in touch via email on Help@LAMASTORE.com or via our Live Chat web service. 
          Every query is important to us and we aim to respond to all chats and emails as soon as possible.
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
            <span className="logo">
              Lamastore
            </span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
