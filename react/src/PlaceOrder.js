import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PlaceOrder() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({})
  const [product, setProduct] = useState({})
  const [price, setPrice] = useState(0);
  const [earned, setEarned] = useState(0);
  const [values, setValues] = useState({}
  );

  const handleInput = (event) => {
    const quantity = parseInt(event.target.value);
    const newPrice = quantity * product.mrp;
    const newEarned = (quantity * product.mrp) - (quantity * product.costPrice);


    if (quantity > product.quantity) {
      alert('insufficent Stocks');
    } else {
      
      setValues(prev => ({
        ...prev,
        quantity: quantity,
        ammount: newPrice,
        earned: newEarned
      }));
    }


    
    setObject();
  };

  useEffect(() => {
    const USER = JSON.parse(sessionStorage.getItem('userData'));
    setUser(USER);
    console.log(USER)
    fetch(`http://localhost:8080/api/inventory/getProduct/${id}`)
      .then(res => res.json())
      .then((result) => { console.log(result); setProduct((result)); });
  }, []);

  const setObject = () => {
    setValues(prev => ({
      ...prev,
      user: user,
      inventory: product,
      orderId: sessionStorage.getItem('UId'),
      orderDate: new Date().toISOString().substr(0, 10),
    }));
  };


  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(JSON.stringify(values));

    fetch("http://localhost:8080/api/orders/placeorder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.massage)
      });
      alert("Order Placed")
      navigate(`/UserDashboard/${user.userId}/${user.userName}`)

  };
  const HandleBack = () => {
    navigate(`/UserDashboard/${user.userId}/${user.userName}`)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">


      <div className="card" style={{ width: '400px' }}>
        <div className="card-header">
          <h5 className="card-title">{product.productName}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">Price: ₹{product.mrp}</p>
          <p className="card-text">Make: {product.make}</p>
          <p className="card-text">in Stock: {product.quantity}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={values.quantity}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={values.quantity === 0}>Place Order</button>
            <button className="btn btn-danger" onClick={HandleBack}>
              <h6>X cancel</h6>
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}
