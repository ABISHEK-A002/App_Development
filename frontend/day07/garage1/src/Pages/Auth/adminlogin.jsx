import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Admin/adminlogin.css';
import CustomCarAnimation from '../../Components/CarAnimation.jsx';

const AdminLogin = ({ registrations = [] }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCarAnimation, setShowCarAnimation] = useState(false);
  const [isValidSubmission, setIsValidSubmission] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const validateForm = () => {
    return registrations.some(reg => reg.email === email && reg.password === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setIsValidSubmission(false);
      return;
    }

    setIsValidSubmission(true);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowCarAnimation(true);
      setTimeout(() => {
        setShowCarAnimation(false);
        navigate('/admindashboard');
      }, 0);
    }, 5000);
  };

  return (
    <div className="adminlogin-container">
      {showCarAnimation && <CustomCarAnimation />}
      {isSubmitting ? (
        <CustomCarAnimation />
      ) : (
        <form className="adminlogin-form" onSubmit={handleSubmit}>
          <h1 style={{
            fontSize: '2.5em',
            color: '#007bff',
            textAlign: 'center',
            marginBottom: '20px',
            animation: 'fadeInDown 1s ease-in-out'
          }}>Admin Login</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember me
            </label>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <span className="spinner"></span> : 'Login'}
            </button>
          </div>
          {!isValidSubmission && (
            <p className="error-message">Invalid email or password.</p>
          )}
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
