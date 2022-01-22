
import React,{useEffect} from "react";
import ReactDOM from "react-dom";

window.axios = require('axios');

import "assets/css/material-dashboard-react.css?v=1.10.0";

import AppRoute  from "router/AppRoute";

// redux
import {Provider} from 'react-redux'
import store from './store/store'
// import setAuthToken from './uitils/setAuthToken'
import {loadUser} from './action/auth'
import { getStaticData } from "action/data";
import { CookiesProvider } from "react-cookie";

const App = () => {
  // if(localStorage.token) {
  //   setAuthToken(localStorage.token)
  // }
 useEffect(()=>{
    store.dispatch(loadUser()) 
    store.dispatch(getStaticData()) 
  },[]) 
  return (
    <CookiesProvider>
      <Provider store={store}>
        <AppRoute /> 
      </Provider>
    </CookiesProvider>

  );
}

ReactDOM.render( <App/>, document.getElementById("root")
);
