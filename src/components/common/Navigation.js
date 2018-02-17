import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Hello Page</IndexLink>
      {" | "}
      <Link to="/tasks" activeClassName="active">To Do</Link>
      {" | "}
      <Link to="/author" activeClassName="active">About author</Link>
    </nav>
  );
};

export default Navigation;
