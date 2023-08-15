import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('account_password');
    localStorage.removeItem("Name");
    localStorage.removeItem("Phone");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Address");
    localStorage.removeItem("UserType");
    localStorage.removeItem("searchHistory");
    localStorage.removeItem('Pk');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
