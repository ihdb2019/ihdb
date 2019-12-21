import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdminPage from './AdminPage/AdminPage';
import LoginPage from './LoginPage/LoginPage';
import NavBar from './NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header" >
        
        <NavBar></NavBar>
        </header>
        <div className="App-body">
          <Switch>
            <Route path="/adminpage" component={AdminPage}></Route>
            <Route path="/loginpage" component={LoginPage}></Route>
          </Switch>
        </div>


      
    </div>
  );
}

export default App;
