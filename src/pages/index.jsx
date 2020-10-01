import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/users">Show a list of name</Link>
      <h3>Welcome to React Router Tutorial.</h3>
      <small> Main Page</small>
      
    </div>
  );
};

export default MainPage;
