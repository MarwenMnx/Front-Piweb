// Navbar.jsx
import React, { Component } from "react";
// import "./Navbar.css"

class Navbar extends React.Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="home">Energy Guard</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="dashboard">Dashboard </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="stats">Stats </a>
          </li>

         
         
          
        </ul>
        
      </div>
    </nav>
     
    );
  }
}

export default Navbar;

