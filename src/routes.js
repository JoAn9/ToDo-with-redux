import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HelloPage from './components/home/HelloPage';
import TasksPage from './components/task/TasksPage';
import AuthorPage from './components/author/AuthorPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloPage}/>
    <Route path="tasks" component={TasksPage} />
    <Route path="author" component={AuthorPage} />
  </Route>
);
