import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Styles/registration.css";

const CustomerRegistration = ({ setRegistrations = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newRegistration = {
      email,
      password,
      address,
      vehicleType
    };

    setRegistrations((prevRegistrations) => {
      const updatedRegistrations = [newRegistration, ...prevRegistrations];
      return updatedRegistrations.slice(0, 10);
    });

    navigate("/login");
  };

  return (
    <div className="registration-html">
      <div className="registration-body">
        <form id="msform" onSubmit={handleSubmit}>
          <h1 className="fs-title" style={{ padding: "20px" }}>
            CUSTOMER REGISTRATION FORM
          </h1>
          <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <div className="form-grid">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="cpass"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                name="vehicleType"
                placeholder="Type of Vehicle Owned"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
              />
            </div>
          </fieldset>
          <button type="submit" className="submit action-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;
