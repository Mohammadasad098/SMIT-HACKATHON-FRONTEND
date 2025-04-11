import { Navigate } from 'react-router-dom';

const AfterLoginRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return <Navigate to="/loanRequest" />;
  }

  return children;
};

export default AfterLoginRoute;