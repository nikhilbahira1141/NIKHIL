import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './product.css'


export default function AddProduct() {
    const navigate = useNavigate();
    const user=sessionStorage.getItem('userData')
    const [product, setProduct] = useState({
        "category": "",
        "productName": "",
        "make": "",
        "quantity": 0,
        "costPrice": 0.0,
        "mrp": 0.0,
        "imageUrl": ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = () => {
        console.log(product)
        fetch("http://localhost:8080/api/inventory/addProduct", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }
        )
        alert("added");
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <fieldset >
                    <legend>Product Details</legend>

                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type='text' name="productName" value={product.productName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label><br></br>
                        <select name='category' onChange={handleChange} style={{ width: '150px' }}>
                            <option>Select Category</option>
                            <option value="ELECTRONIC">ELECTRONIC</option>
                            <option value="ACCESSORIES">ACCESSORIES</option>
                            <option value="STATIONARY">STATIONARY</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="make">Make</label>
                        <input type='text' name="make" value={product.make} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="costPrice">Cost Price</label>
                        <input type='number' name="costPrice" value={product.costPrice} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mrp">MRP</label>
                        <input type='number' name="mrp" value={product.mrp} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mrp">Image</label>
                        <input type='text' name="imageUrl" value={product.imageUrl} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type='number' name="quantity" value={product.quantity} onChange={handleChange} required />
                    </div>

                    <button type='submit'>ADD</button>
                </fieldset>
            </form>
        </div>

    )
}
