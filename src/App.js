import './App.css';

import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/Home';
import Cart from './screens/Cart';
import Account from './screens/Account';
import {auth} from './firebase'
import { useEffect, useState } from 'react';
import Signin from './screens/signin';
import { useStatevalue } from './context/StateProvider';
function App() {
  
  const [{user},dispatch] = useStatevalue()

  
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch({
          type:"ADD_USER" ,
          user:user
        })
      }
      else{
        dispatch({
          type:"ADD_USER",
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Signin/>
        </Route>
        <Route path='/account'>
          <NavBar/>
          <Account/>
        </Route>
        <Route path='/cart'>
          <NavBar/>
          <Cart/>
        </Route>
        <Route exact path='/'>
          <NavBar/>
          <Home/>
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
