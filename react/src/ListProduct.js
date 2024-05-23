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
            <div className="row" >
                {filtered.map(p => (
                    <div className="col-md-6 mb-4" key={p.productId} style={{width:'500pxl'}}>
                        <div className="card">
                            <img src={p.imageUrl} className="card-img-top" alt="Product" style={{width:'200px',height:'300pxl'}} />
                            <div className="card-body">
                                <h5 className="card-title">{p.productName}</h5>
                                <p className="card-text">{p.make}</p>
                                <p className="card-text">₹{p.mrp}</p>
                                <a href={`/placeorder/${p.productId}`} className="btn btn-primary">BUY</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}
