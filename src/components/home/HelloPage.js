import React from 'react';
import Footer from '../common/Footer';
import Navigation from '../common/Navigation';
import Form from './Form';
import Header from '../common/Header';

class HelloPage extends React.Component {
  render() {
    return (
      <div className="HelloPage">
        <Header />
        <Form />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default HelloPage;
