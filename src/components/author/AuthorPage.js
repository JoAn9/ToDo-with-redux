import React from 'react';
import Footer from '../common/Footer';
import Navigation from '../common/Navigation';

class AuthorPage extends React.Component {
  render() {
    return (
      <div className="author-page">
        <h1>Some info about author</h1>
        <p className="author">Here is the place for the info</p>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default AuthorPage;
