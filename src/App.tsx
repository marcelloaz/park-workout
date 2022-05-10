import React, { Component } from 'react';

import './App.css';
import LayoutComponent from './components/layout';
import IndexPage from './pages';
import { Routes ,Route, BrowserRouter, useLocation } from 'react-router-dom';
import LoginScreen from './pages/login';
import HomeScreen from './pages/home';
import RegisterScreen from './pages/register';
import ChallengesScreen from './pages/challenges';
import CreateVideoScreen from './components/create-video';
import CreateChallengeVideoScreen from './pages/challenges/create-challenge';
import DetailsChallengeVideoScreen from './pages/challenges/details-challenge';

class App extends Component {




  render() {

    
    return (
      <LayoutComponent>
      
            <Routes>
              <Route path="/" element={<IndexPage />}></Route>
              <Route path="/login" element={<LoginScreen />}></Route>
              <Route path="/home" element={<HomeScreen />}></Route>
              <Route path="/register" element={<RegisterScreen />}></Route>
              <Route path="/challenges" element={<ChallengesScreen />}></Route>
              <Route path="challenges/new" element={<CreateChallengeVideoScreen />}></Route>
              <Route path="challenges/details/:id" element={<DetailsChallengeVideoScreen />}></Route>
              
          </Routes>
      
      </LayoutComponent>
    );
  }
}

export default App;
