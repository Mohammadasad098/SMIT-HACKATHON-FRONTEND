import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/v1/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Local Storage se token remove karo
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');

        alert('Logout successful!');
        console.log('User logged out successfully');
        navigate('/');
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="py-10 px-4 bg-red-500 text-white rounded hover:bg-red-600"
      disabled={loading}
    >
      {loading ? 'Logging Out...' : 'Logout'}
    </button>
  );
};

export default Logout;
