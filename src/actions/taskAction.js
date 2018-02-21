import * as types from './actionTypes';

let nextTodoId = 0;

export function createTask(task) {
  return {
    type: types.CREATE_TASK,
    id: nextTodoId++,
    task
  };
}
