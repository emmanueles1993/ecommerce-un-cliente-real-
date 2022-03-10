import React, { useState } from "react";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import ModalCart from "./Modal";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div div>
      <nav className="navbar navbar-expand-lg navbar-light starmarine d-flex">
        <div className="container-fluid">
          <img
            src={require("../images/logo.png")}
            className="car-img-top img-fluid col-8"
          />
          <button className="btn btn-danger ms-2" onClick={handleShow}>
            <span className="fa fa-shopping-cart me-2 col-2"></span>carrito
          </button>
        </div>
      </nav>

      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
};

export default Header;
