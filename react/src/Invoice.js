import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactPrint from "react-to-print";

function Invoice() {
    const [orders, setOrders] = useState([]);
    const userId = sessionStorage.getItem('UId');
    const date = new Date().toISOString().substr(0, 10)
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const ref = useRef();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/api/orders/ordersbyid/${userId}`)
            .then(res => res.json())
            .then(result => {
                setOrders(result);
                let sum = 0;
                result.forEach(ord => {
                    if (!isNaN(ord.ammount)) {
                        sum += parseFloat(ord.ammount);
                    }
                });
                setTotal(sum);
            })
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    return (
        <div>
             <div>
                <ReactPrint
                    trigger={() => <button color="info">Print</button>}
                    content={() => ref.current}
                />
            </div>
            <div className="container mt-5" ref={ref}>
                <div className="row">
                    <div className="col">
                        <img
                            src="/images/n.jpg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="N-MART Logo"
                        />
                        <span style={{ fontWeight: 'bold', fontSize: '1.2em', marginLeft: '5px', fontFamily: 'cursive' }}>N-MART</span>
                    </div>
                    <div className="col">
                        <h1>Invoice</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p><strong>Invoice Number:</strong> INV-{userId}</p>
                        <p><strong>Date:</strong>{date}</p>
                    </div>
                    <div className="col text-right">
                        <p><strong>Customer:</strong> {user.userName}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Make</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.srNo}>
                                        <td>{order.inventory.productName}</td>
                                        <td>{order.inventory.make}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.inventory.mrp}</td>
                                        <td>{order.ammount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-right">
                        <p><strong>Total:</strong> ₹{total}</p>
                    </div>
                </div>

            </div>
           
        </div>
    );
}

export default Invoice;
