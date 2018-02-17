import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskAction';
import Footer from '../common/Footer';
import Navigation from '../common/Navigation';

class TasksPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      task: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const task = this.state.task;
    task.title = event.target.value;
    this.setState({
      task: task
    });
  }

  onClickSave() {
    this.props.actions.createTask(this.state.task);
  }

  taskRow(task, index) {
    return <div key={index}>{task.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Tasks to do</h1>
        {this.props.tasks.map(this.taskRow)}
        <h2>Add New Task</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.task.title} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(TasksPage);
