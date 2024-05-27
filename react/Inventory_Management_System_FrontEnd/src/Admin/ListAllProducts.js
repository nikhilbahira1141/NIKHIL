import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function ListAllProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/inventory/listProduct")
            .then(res => res.json())
            .then(result => { setProducts(result); });
        console.log(products)
    }, []);


    const ELECTRONICS = products.filter(
        (pro) => pro.category === 'ELECTRONIC');

    const STATIONARY = products.filter(
        (pro) => pro.category === 'STATIONARY');

    const ACCESSORIES = products.filter(
        (pro) => pro.category === 'ACCESSORIES');

    return (
        <div className="container">
            <h2 className="my-4">Products by Category</h2>
            <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">ELECTRONICS</h5>
                        </div>
                        {ELECTRONICS.map(s => (
                            <div className="card-body" key={s.productId}>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        {s.productName}-{s.make}
                                        <span className="badge bg-success d-flex justify-content-center align-items-center">In Stock: {s.quantity}</span>

                                        {s.quantity === 0 && (
                                             <a href={`/fillStock/${s.productId}`} className="btn btn-danger">Fill Stock</a>
                                        )}
                                        <a href={`/details/${s.productId}`} className="btn btn-primary">Details</a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">STATIONARY</h5>
                        </div>
                        {STATIONARY.map(s => (
                            <div className="card-body" key={s.productId}>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        {s.productName}-{s.make}
                                        <span className="badge bg-success d-flex justify-content-center align-items-center">In Stock: {s.quantity}</span>
                                        {s.quantity === 0 && (
                                             <a href={`/fillStock/${s.productId}`} className="btn btn-danger">Fill Stock</a>
                                        )}
                                        <a href={`/details/${s.productId}`} className="btn btn-primary">Details</a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">ACCESSORIES</h5>
                        </div>
                        {ACCESSORIES.map(s => (
                            <div className="card-body" key={s.productId}>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        {s.productName}-{s.make}
                                        <span className="badge bg-success d-flex justify-content-center align-items-center">In Stock: {s.quantity}</span>

                                        {s.quantity === 0 && (
                                            <a href={`/fillStock/${s.productId}`} className="btn btn-danger">Fill Stock</a>
                                        )}
                                        <a href={`/details/${s.productId}`} className="btn btn-primary">Details</a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}
