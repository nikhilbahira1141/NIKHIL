import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export default function UpdateProduct({ id }) {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const user = sessionStorage.getItem('userData')

    useEffect(() => {
        fetch(`http://localhost:8080/api/inventory/getProduct/${id}`)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);
            }
            ).catch((e) => console.log(e));
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/inventory/update", {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productId">Id:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productId"
                        name="productId"
                        value={product.productId ?? ""}
                        disabled={true}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        value={product.productName ?? ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="costPrice">Cost Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="costPrice"
                        name="costPrice"
                        value={product.costPrice ?? ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mrp">MRP:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="mrp"
                        name="mrp"
                        value={product.mrp ?? ""}
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

