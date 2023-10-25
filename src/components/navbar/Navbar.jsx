import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <i className="fa fa-book text-warning"></i> Task{" "}
            <span className="text-warning">manager</span>{" "}To-Do
          </Link>
          {/* <Link className="btn btn-danger">Logout</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
