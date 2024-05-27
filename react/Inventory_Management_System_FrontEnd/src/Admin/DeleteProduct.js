import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteProduct({ id }) {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('userData');

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/inventory/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          console.log('Deleted successfully.');
          navigate(`/AdminDashboard/${user.userId}/${user.userName}`);
        } else {
          console.log('Failed to delete.');
        }
      })
      .catch((error) => {
        console.error('Error deleting:', error);
      });
  };

  return (
    <div class="container mt-5">
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-title">Are you sure you want to Delete product?</h3>
          <form class="mt-3" onSubmit={handleDelete}>
            <button type="submit" class="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>

  );
}
