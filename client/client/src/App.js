import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getusers } from './actions/user';
import { updateprofile } from './actions/user';
import { getRewards } from './actions/rewards';

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
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);

console.log( currentId , 'home')
   useEffect(() => {
    dispatch(getusers());
}, [currentId, dispatch]);

  const { users, isLoading } = useSelector((state) => state.user);
  console.log(users, isLoading);

  const Myuser= useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
  console.log(Myuser , 'app');
 
  const notify = () => {
    toast(`congratulation ${Myuser?.name}, you have reached new level.`)
  }
  
  useEffect(() => {
    if(Myuser?.experience === 50){
      dispatch(updateprofile(currentId,{experience: 0, level: Myuser?.level + 1}));
      notify();
     }
  }, [Myuser?.experience])

  useEffect(() => {
    dispatch(getRewards());
}, [dispatch]);

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
