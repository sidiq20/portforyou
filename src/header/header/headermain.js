import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Headermain = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          {/* Add navigation link to the Portfolio page */}
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Headermain;
