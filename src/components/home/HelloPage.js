import React from 'react';
import { Link } from 'react-router';
import Footer from '../common/Footer';

class HelloPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Application TO DO with a surprise</h1>
        <p>React, Redux and React Router in ES6. Also Fetch, Bootstrap and other fancy things.</p>
        <Link to="tasks" className="btn btn-primary btn-lg">Task List</Link>
        <Footer />
      </div>
    );
  }
}

export default HelloPage;
