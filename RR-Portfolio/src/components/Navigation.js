import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';


function Navigation(props) {
  const {pages=[], setCurrentPage, currentPage,} = props; 
  useEffect(()=>{
    document.title = capitalizeFirstLetter(currentPage.name);
  },[currentPage]);
  return (
  <div className="Navigation">
    <h1>Ryan Robinson</h1>
    <ul className= "flex-row">
    {pages.map((Page)=>(
      <li className={`mx-5 ${currentPage.name===Page.name && 'navActive'}`} key={Page.name}>
        <span onclick={()=> setCurrentPage(Page)}>
          {capitalizeFirstLetter(Page.name)}
        </span>
      </li>
    ))}
    </ul>
    {/* <div className="Links">
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
    </div> */}
  </div>
  );
}
export default Navigation;