import React from 'react';
import { Link } from "react-router-dom";

const Navigation= () =>{
  return (
  <div className="Navigation">
    <h1>Ryan Robinson</h1>
    <div className="Links">
    <li>
      <Link to="/">About Me</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    </div>
  </div>
  );
}
export default Navigation;