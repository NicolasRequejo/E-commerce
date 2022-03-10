import React, { Component } from "react";
import "../styles/navbar.css";
import logo from "../assets/logoMarca.png";
import logoCarrito from "../assets/carrito.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar"
        id="Navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="field has-addons">
          <div className="control" id="Search">
            <input
              className="input"
              id="inputSearch"
              type="text"
              placeholder="Buscar"
            />
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Sneakers</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Nike</a>
              <a className="navbar-item">Addidas</a>
              <a className="navbar-item">Topper</a>
              <a className="navbar-item">Otras marcas</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Ropa</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Nike</a>
              <a className="navbar-item">Addidas</a>
              <a className="navbar-item">Topper</a>
              <a className="navbar-item">Otras marcas</a>
            </div>
          </div>
          <div className="navbar-brand" id="logoMarca">
            <Link to="/" className="navbar-item" href="#" id="logo">
              <img
                className="imagenLogo"
                src={logo}
                width="135"
                alt="Imagen"
              ></img>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  to="/register"
                  className="button is-primary"
                  id="botonRegistro"
                >
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light" id="botonLogin">
                  {" "}
                  Log in
                </Link>
                <button className="button is-primary" id="botonCarrito">
                  <span className="icon">
                    <img src={logoCarrito} alt="logo" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
