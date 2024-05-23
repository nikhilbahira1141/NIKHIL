import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, redirect } from 'react-router-dom';

export default function FillStock() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [product, setProduct] = useState(null);
    const [values, setValues] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const USER = JSON.parse(sessionStorage.getItem('userData'));
        setUser(USER);
        fetch(`http://localhost:8080/api/inventory/getProduct/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const setObject = () => {
        if (product) {
            setValues(prev => ({
                ...prev,
                user: user,
                product: product,
                purchaseDate: new Date().toISOString().substr(0, 10),
            }));
        }
    };

    const handleChange = (event) => {
        const quantity = parseInt(event.target.value);
        const price = quantity * product.costPrice;
        setValues(prev => ({
            ...prev, quantity: quantity,
            costPrice: price

        }));

        setObject();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (product) {
            fetch("http://localhost:8080/api/purchase/fillStocks", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }).then(response => {
                console.log('Response from server:', response);
            }).catch(error => {
                console.error('Error submitting data:', error);
            });
        }
        alert("Stock Added")
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    };

    const HandleBack=()=>{
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
            <div style={{ width: '400px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px' }}>
                <div className="card-header">
                    <h5 className="card-title">{product.productName}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Price: ₹{product.costPrice}</p>
                    <p className="card-text">Make: {product.make}</p>
                    <p className="card-text">in Stock: {product.quantity}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            name='quantity'
                            value={values.quantity}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-success">ADD</button>
                        <button className="btn btn-primary" onClick={HandleBack}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
