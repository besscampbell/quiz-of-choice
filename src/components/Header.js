import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Quiz Creator and Taker</h1>
      <h4><Link to="/">Home</Link> | <Link to="/signin">Sign In</Link></h4>
      <br/>
    </React.Fragment>

  );
}

export default Header;