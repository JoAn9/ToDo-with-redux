import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as taskActions from "../../actions/taskAction";
import * as nameAction from "../../actions/nameAction";
import HelloPage from "./HelloPage";
import TasksPage from "../task/TasksPage";

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name : '',
      band : '',
      nameText: '',
      bandText: '',
      submitted: false
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onBandChange = this.onBandChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const name = event.target.value;
    this.setState({
      name: name
    });
  }

  onBandChange(event) {
    const band = this.state.band;
    this.setState({
      band: event.target.value
    });
  }

  onClickSave() {
    this.props.action.createName(this.state.name);
    // this.props.action.createBand(this.state.band);
    // this.setState({
    //   submitted: true
    // });

  }

  render() {
    // if(this.state.submitted) {
    //   return <TasksPage />;
    // }
    return (
      <form onSubmit={this.onClickSave}>
        <input
          type="text"
          placeholder="Imię"
          value={this.state.name}
          onChange={this.onNameChange}/>
        <div>{this.state.nameText}</div>
        <input
          type="text"
          placeholder="Ulubiony zespół muzyczny"
          value={this.state.band}
          onChange={this.onBandChange}/>
        <div>{this.state.bandText}</div>
        <input
          className="btn btn-primary btn-lg"
          type="submit"
          value="Potwierdzam dane"/>
      </form>
    );
  }
}
//
// Form.propTypes = {
//   name: PropTypes.string.isRequired,
//   action: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nameAction, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Form);
