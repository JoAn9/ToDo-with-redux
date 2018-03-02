import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createUser } from '../actions/userAction';
import store from '../store/configureStore';


export class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            band: ''
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onBandChange = this.onBandChange.bind(this);
    }


    onNameChange(event) {
        const name = this.state.name;
        this.setState({
            name: event.target.value
        });
    }

    onBandChange (event) {
        const band = this.state.band;
        this.setState({
            band: event.target.value
        });
    }

    onOKClick = (e) => {
      e.preventDefault();
      this.props.onOKClick(this.state.name, this.state.band);
    };


  render() {
    const { name, band } = this.props;

    return (
      <form onSubmit={e => this.onOKClick(e)}>
        <div>Your name: {name}</div>
        <div>Your favourite band: {band}</div>
        <input
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.onNameChange} />

        <input
            type="text"
            placeholder="Your favourite band"
            value={this.state.band}
            onChange={this.onBandChange} />

        <input type="submit" value="Submit" />

      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onOKClick: (name, band) => dispatch(createUser(name, band))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
