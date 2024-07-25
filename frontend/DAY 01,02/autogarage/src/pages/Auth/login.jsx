import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/login.css'; 
import CustomCarAnimation from '../../components/UI/loading.jsx'; 

const Login = ({ registrations }) => {
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
    return email.includes('@') && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setIsValidSubmission(false);
      return;
    }

    setIsValidSubmission(true);
    setIsSubmitting(true);

    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      setShowCarAnimation(true); 
      setTimeout(() => {
        setShowCarAnimation(false);
        navigate('/nav'); // Navigate to the NavBar component
      }, 3000); 
    }, 1000);
  };

  return (
    <div className="login-container">
      {showCarAnimation && <CustomCarAnimation />} 
      {isSubmitting ? (
        <CustomCarAnimation />
      ) : (
        <form onSubmit={handleSubmit}>
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
            <p className="error-message">Please enter valid email and password.</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;
