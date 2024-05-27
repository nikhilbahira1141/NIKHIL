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

        if (quantity < 0) {
            alert('Quantity should not be nigative')
        }
        else {
            setValues(prev => ({
                ...prev, quantity: quantity,
                costPrice: price

            }));
        }

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

    const HandleBack = () => {
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h5 className="modal-title">{product.productName}</h5>
                </div>
                <div className="modal-body">
                    <p className="modal-text">Price: ₹{product.costPrice}</p>
                    <p className="modal-text">Make: {product.make}</p>
                    <p className="modal-text">In Stock: {product.quantity}</p>
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
