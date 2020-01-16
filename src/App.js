import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './containers/Users/UsersContainer';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="App-content">
					<Route path="/main" render={() => < Main />}/>
					<Route path="/users" render={() => <UsersContainer />}/>
				</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
