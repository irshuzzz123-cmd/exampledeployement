import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-blue-900" >
      <div className="container-fluid">

        <Link className="navbar-brand" href="/">
          Navbar
        </Link>

        <div className="navbar-collapse d-flex justify-content-end gap-5">

          <ul className="navbar-nav gap-5">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contactus">
                Contact
              </Link>
            </li>

          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navigation;