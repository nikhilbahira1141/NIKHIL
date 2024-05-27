import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ListProduct() {
    const { catagory } = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('userData'))

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/inventory/list/${catagory}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
                alert("Failed to fetch data");
            }
        };
        fetchData();
    }, "");

    const HandleBack = () => {
        navigate(`/UserDashboard/${user.userId}/${user.userName}`)
    }

    const filtered = products.filter(p => p.quantity > 0);


    return (
        <div className="container">
            <button className="btn btn-danger" onClick={HandleBack}><h6>X</h6></button>
            <h2 className="my-4">Shop Products</h2>
            <div className="row">
                {filtered.map(product => (
                    <div className="col-md-4 mb-4" key={product.productId}>
                        <div className="card h-100">
                            <img src={product.imageUrl} className="card-img-top" alt="Product" style={{ height: '200px', width: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.make}</p>
                                <p className="card-text">₹{product.mrp}</p>
                                <a href={`/placeorder/${product.productId}`} className="btn btn-primary">BUY</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}
