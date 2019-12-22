import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AdminPage from './AdminPage/AdminPage';
import LoginPage from './LoginPage/LoginPage';
import NavBar from './NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './RegisterPage/Register';
import UserPage from './UserPage/UserPage';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
function App() {

  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isCreator, setCreator] = useState(false);
  return (
    <div className="App">
      <header className="App-header" >

        <NavBar isAdmin={isAdmin} isLogin={isLogin} userName={userName} userType={userType} ></NavBar>
      </header>
      <div className="App-body">
        <Switch>

          <Route
            path='/adminpage'
            render={(props) => <AdminPage {...props} userName={userName} userType={userType} token={token} />}
          />
          <Route
            path='/registerpage'
            render={(props) => <RegisterPage {...props} userName={userName} userType={userType} token={token} />}
          />
          <Route
            path='/myprofile'
            render={(props) => <UserPage {...props} userName={userName} userType={userType} token={token} />}
          />
          <Route
            path='/loginpage'
            render={(props) => <LoginPage {...props} setCreator={setCreator} setAdmin={setAdmin} setLogin={setLogin} setUserName={setUserName} setUserType={setUserType} setToken={setToken} />}
          />
        </Switch>
      </div>



    </div>
  );
}

export default App;
