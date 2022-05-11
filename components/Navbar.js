import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
            //here were creating a Navigation Bar 
            //giving margin and dark border
            
          Vivekananda Reddy React Redux Contact BookCase study 
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
