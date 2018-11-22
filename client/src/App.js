import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModule from './components/ItemModel';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar/>
          <Container>
            <ItemModule/>
            <TaskList/>
          </Container>
        </div>
      </Provider>      
    );
  }
}

export default App;
