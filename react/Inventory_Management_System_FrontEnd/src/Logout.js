import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <div class="container mt-5">
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-title" style={{fontFamily: 'cursive'}}>Are you sure you want to Logout?</h3>
          <form class="mt-3" onSubmit={handleLogout}>
            <button type="submit" class="btn btn-danger">Logout</button>
          </form>
        </div>
      </div>
    </div>

  )
}
