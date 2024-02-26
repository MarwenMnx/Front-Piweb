import React, { useState } from "react";
import { useDispatch } from 'react-redux'; 
import "./auth.css";
import * as api from '../../api/userApi';
import { register, login } from '../../actions/authActions'; 

export default function Auth(props) {
  const dispatch = useDispatch(); 
  const [authMode, setAuthMode] = useState("signin");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const rolesEnum = ['Administrator', 'Energy Manager', 'Operator'];

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      if (authMode === "signup") {
        
        await dispatch(register({ username, password, role }));
        console.log("User created successfully");
      } else {
       
        await dispatch(login({ username, password }));
        console.log("user signed in");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{authMode === "signin" ? "Sign In" : "Sign Up"}</h3>
          <div className="text-center">
            {authMode === "signin" ? "Not registered yet? " : "Already registered? "}
            <span className="link-primary" onClick={changeAuthMode}>
              {authMode === "signin" ? "Sign Up" : "Sign In"}
            </span>
          </div>
          {authMode === "signup" && (
            <div>
              <div className="form-group mt-3">
                <label>username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Role</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select User Role</option>
                  {rolesEnum.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {authMode === "signin" && (
            <div className="form-group mt-3">
              <label>username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#"> Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
