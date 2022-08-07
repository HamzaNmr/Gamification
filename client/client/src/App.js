import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Leaderboard from './components/Leaderboard/Leaderboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Rewards from './components/Rewards/Rewards';
import RewardsPage from './components/Rewards/RewardsPage';

import Community from './components/Community/Community';


import './App.css';


function App() {
  return (
    <BrowserRouter>
        <Container maxWidth="xl" className='body'>
              <Navbar />
              <Routes>
                <Route path="/" exact element={<Navigate to="/home"/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/leaderboard" exact element={<Leaderboard/>} />

                <Route path="/rewards" exact element={<RewardsPage/>} />

                <Route path="/community" exact element={<Community/>} />
              </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
