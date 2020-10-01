import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Welcome to React Router Tutorial.</h3>
      <small> Main Page</small>
      <Link to="/users">Show a list of name</Link>
    </div>
  );
};

export default MainPage;
