import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="home">Energy Guard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="home">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="dashboard">Dashboard</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="stats">Stats</a>
            </li>
          </ul>
          <Link to="/auth" className="btn btn-primary my-2 my-sm-0">Sign In</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
