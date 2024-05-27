import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Admin/Header';

export default function RegisterUser() {

    let navigate = useNavigate();
    const [values, setValues] = useState({
        userName: '',
        password: '',
        role: 'user'
    });

    const handleInput = (event) => {

        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(values));

        fetch("http://localhost:8080/login/register", {
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
                console.error('There was a problem with the fetch operation:', error);
            });
        navigate("/login");
    };

    return (
        <div className="container">
    <h4 className="mb-4">Registration Of New User</h4>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">UserName:</label>
            <input type="text" className="form-control" id="name" name="userName" onChange={handleInput} />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleInput} />
        </div>

        <div className="mb-3">
            <label htmlFor="contactNo" className="form-label">Contact Number:</label>
            <input type="text" className="form-control" id="contactNo" name="contactNo" />
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
    </form>
</div>

    )
}
