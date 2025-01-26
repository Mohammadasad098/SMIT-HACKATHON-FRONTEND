// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn'); // Checking if the user is logged in

  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  return children; // If logged in, allow access to protected route
};

export default ProtectedRoute;