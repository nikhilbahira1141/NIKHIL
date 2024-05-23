import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if (confirmLogout) {
            sessionStorage.clear();
            navigate("/login");
        }
    }, []); 

    return null;
}
