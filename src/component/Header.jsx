import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2>Tender Bids</h2>
          </Link>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <form className="d-flex">
            <Link to="/login" className="btn btn-success ml-2">
              Login
            </Link>
            <Link to="/admindashboard" className="btn btn-secondary ms-2 ">
             Admin Dashboard
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
