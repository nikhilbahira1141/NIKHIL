import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_name: '',
        password: ''
    });
    const [userId, setUserID] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }
    const generateId = () => {
        const timestamp = Date.now();
        const concatenatedString = `${timestamp}${userId}`;
        let hash = 0;
        for (let i = 0; i < concatenatedString.length; i++) {
            const char = concatenatedString.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        const numericalId = Math.abs(hash);
        sessionStorage.setItem('UId', numericalId);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/login/${formData.user_name}/${formData.password}`);

            if (response.ok) {
                const loggedInUser = await response.json();
                const { userId, userName, role } = loggedInUser;
                setUserID(userId);
                handleRoleNavigation(userId, userName, role);
                sessionStorage.setItem('userData', JSON.stringify(loggedInUser));
                generateId();
                alert("Login successful");
            } else {
                alert("Login failed:invalid username or password");
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            alert("Login failed");
        }
    };

    const handleRoleNavigation = (userId, userName, role) => {
        if (role === 'admin') {
            navigate(`/AdminDashboard/${userId}/${userName}`);
        } else if (role === 'user') {
            navigate(`/UserDashboard/${userId}/${userName}`);
        } else {
            alert('Invalid username or password');
        }
    };
    return (
        <div style={{ backgroundImage: 'url("/images/background.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container" style={{ width: '300px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <div className="text-center mb-4">
                    <img src="/images/n.jpg" alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', marginLeft: '5px', fontFamily: 'cursive' }}>N-MART</h3>
                </div>

                <form className="bg-light p-4 rounded" onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label font-weight-bold">Username</label>
                        <input type="text" className="form-control" id="username" name="user_name" value={formData.user_name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label font-weight-bold">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <a href="/register">register user</a><br></br>
                    <button type="submit" className="btn btn-success btn-block">Login</button>
                </form>
            </div>
        </div>


    )
}