import React, { useState,useEffect } from 'react'
import "./App.css";
import {BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";
import Bookmarks from "./Pages/Bookmarks";
import List from "./Pages/List";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import {auth} from "./utils/firebase";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import {  createMuiTheme, ThemeProvider } from '@material-ui/core';
import Loading from './utils/Loading';
const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#4ba1f2'
    }
  }
})

function App() {
  const [values,setValues] = useState ({
    isAuth: false,
    isLoading: true
  })
  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setValues ({isAuth: true, isLoading: false});
      } else {
        // No user is signed in.
        setValues ({isAuth: false, isLoading: false});
      }
    });
  }, [])

  if (values.isLoading)
  {
    return <div className="chweetahh"><Loading/> </div>
  }


  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Switch> 
          <PublicRoute isAuth={values.isAuth} restricted={true} path='/login'  exact component={Login} />
          <PublicRoute isAuth={values.isAuth} restricted={true} path='/register'  exact component={Register} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/'  component={Home} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/home'  component={Home} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/explore'  component={Explore} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/notification'  component={Notifications} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/messages'  component={Messages} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/bookmarks'  component={Bookmarks} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/list'  component={List} />
          <PrivateRoute isAuth={values.isAuth} exact  path='/profile'  component={Profile} />
          </Switch>
    </Router>
    </ThemeProvider>
  );
}
export default App;
