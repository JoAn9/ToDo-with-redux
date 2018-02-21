import {combineReducers} from 'redux';
import tasks from './taskReducer';
import name from './nameReducer';


const rootReducer = combineReducers({
  tasks,
  name
});

export default rootReducer;
