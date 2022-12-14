import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getusers } from './actions/user';
import { updateprofile } from './actions/user';
import { getRewards } from './actions/rewards';
import { getBadges } from './actions/badges';

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

import { getMissions } from './actions/dailyMission';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);

   useEffect(() => {
    dispatch(getusers());
}, [currentId, dispatch]);

  

  const Myuser= useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
 
 
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

useEffect(() => {
  dispatch(getBadges());
}, [dispatch]);

   useEffect(() => {
    dispatch(getMissions());
}, [currentId, dispatch]);


const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0
});

const [cursorVariant, setCursorVariant] = useState("default");

useEffect(() => {
  const mouseMove = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  }
}, []);

const variants = {
  default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
  },
  text: {
    height: 30,
    width: 30,
    x: mousePosition.x - 5,
    y: mousePosition.y - 5,
  }
}

const textEnter = () => setCursorVariant("text");
const textLeave = () => setCursorVariant("default");

  return (
    <BrowserRouter>
        <Container maxWidth="xl" className='body' onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        />
              <Navbar />
              <ToastContainer style={{marginTop: '50px'}}/>
              <Routes>
                <Route path="/" exact element={<Navigate to={user ? "/home" : "/Auth"}/>} />
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
