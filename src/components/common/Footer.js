import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

export const Footer = () => {
  return (
    <footer>
      <nav>
        <IndexLink to="/" activeClassName="active">Hello Page</IndexLink>
        {" | "}
        <Link to="/tasks" activeClassName="active">To Do</Link>
        {" | "}
      </nav>
      <p>
        Copyright 2018 | All Rights Reserved. - JoAn9{" | "}
        <a href="https://pl.freepik.com/darmowe-zdjecie/rama-z-urz-dem-urz-dze-na-bia-ym-biurko_1147875.htm">
          Tła z Freepik
        </a>
      </p>
  </footer>
  );
};

export default Footer;
