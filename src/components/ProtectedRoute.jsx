// // ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//     const isAuthenticated = localStorage.getItem('isLoggedIn'); // Checking if the user is logged in

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />; // Redirect to login if not authenticated
//   }

//   return children; // If authenticated, render the children (protected content)
// };

// export default ProtectedRoute;