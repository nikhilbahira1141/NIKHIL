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
    <div>
      <h3 style={{ color: 'red' }}>Are you sure you want to delete the complete record of the given product?</h3>

      <form onSubmit={handleDelete}>
        <button type="submit" className="btn btn-danger">Delete</button>
      </form>
    </div>

  );
}
