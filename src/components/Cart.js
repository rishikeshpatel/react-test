import React, { useState } from 'react';

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#ececec',
        padding: 10,
        width: '20%',
      }}
    >
      <b> Cart</b>
      <b>Subtotal: ${0}</b>

      {cart.length > 0 ? (
        <>
          {cart.map((cart) => (
            <div>
              <span>{cart.title}</span>
              <span>: ${cart.price}</span>
            </div>
          ))}
        </>
      ) : (
        <b>Cart is empty</b>
      )}
    </div>
  );
};

export default Cart;
