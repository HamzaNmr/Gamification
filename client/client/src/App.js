import React from 'react';

import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Leaderboard from './components/Leaderboard/Leaderboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Rewards from './components/Rewards/Rewards';
import RewardsPage from './components/Rewards/RewardsPage';
import Auth from './components/Auth/UserForm';
import Community from './components/Community/Community';
import CommunityDetail from './components/Community/CommunityDetail';
import Tasks from './components/Tasks/Tasks';
import Page from './components/DailyCrad/Page';
import About from './components/About/About';


import './App.css';
import TaskDetail from './components/TaskDetail/TaskDetail';



function App() {

  return (
    <BrowserRouter>
        <Container maxWidth="xl" className='body'>
              <Navbar />
              <ToastContainer style={{marginTop: '50px'}}/>
              <Routes>
                <Route path="/" exact element={<Navigate to="/Auth"/>} />
                <Route path="/Auth" exact element={<Auth/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/leaderboard" exact element={<Leaderboard/>} />
                <Route path="/rewards" exact element={<RewardsPage/>} />
                <Route path="/tasks" exact element={<Tasks/>} />
                <Route path="/tasks/:id" exact element={<TaskDetail/>} />
                <Route path="/community" exact element={<Community/>} />
                <Route path="/community/:id" exact element={<CommunityDetail/>} />
                <Route path="/daily" exact element={<Page/>} />
                <Route path="/About" exact element={<About/>} />
              </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
