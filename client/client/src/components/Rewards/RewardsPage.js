import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Rewards from './Rewards';
import Stack from '@mui/material/Stack';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Container, Col } from 'react-grid-system';
import "./styles.css";

const RewardsPage = () => {

  //for points box
  // const fetchPoints = async () => {
  //   if (auth.currentUser) {
  //     const userProfile = await getUserProfile(auth.currentUser.uid);
  //     if (userProfile) {
  //       setLoaded(true);
  //       setPoints(userProfile.points);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchPoints();
  // });

  const [points, setPoints] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //for data fetching
  // const [Rewards, setRewards] = useState([]);
  // let {id} = useParams();
  // useEffect(() => {
  //   const fetchReward = async () => {
  //     const { data } = await axios.get("http://localhost:5000/userReward")
  //     setRewardsAll(data);
  //   };
  //   fetchReward();
  // }, []);

  //data test
  const RewardsData = [
    {
      rewardID: '1',
      rewardName: 'Day Off',
      rewardIcon: require('../../images/reward4.png'),
      rewardDetails: 'finsh half of tasks +2 before half of month',
      rewardCost: 400
    },
    {
      rewardID: '2',
      rewardName: 'Free AWS Workshop',
      rewardIcon: require('../../images/reward1.png'),
      rewardDetails: 'Finish One month tasks effeciently before deadlines by 3 days',
      rewardCost: 170
    },
    {
      rewardID: '3',
      rewardName: 'Clean Code Cecil Book',
      rewardIcon: require('../../images/reward2.png'),
      rewardDetails: 'Start to clean your code for this month tasks',
      rewardCost: 80
    },
    {
      rewardID: '4',
      rewardName: 'Part-Time Week',
      rewardIcon: require('../../images/reward3.png'),
      rewardDetails: 'finsh half of tasks +1 before half of 2 week',
      rewardCost: 300
    },
    {
      rewardID: '5',
      rewardName: 'Workshop',
      rewardIcon: require('../../images/reward5.png'),
      rewardDetails: 'Finish One month tasks effeciently before deadlines',
      rewardCost: 200
    },
    {
      rewardID: '6',
      rewardName: 'Trip',
      rewardIcon: require('../../images/medal.png'),
      rewardDetails: 'Gain four Rewards in 3 consecutive months',
      rewardCost: 200
    },
    {
      rewardID: '7',
      rewardName: 'Part-Time 2 Weeks',
      rewardIcon: require('../../images/rewards.png'),
      rewardDetails: 'finsh half of tasks +1 before half of 2 week',
      rewardCost: 350
    },
    {
      rewardID: '8',
      rewardName: 'Payoff 100$',
      rewardIcon: require('../../images/money.png'),
      rewardDetails: 'Gain six Rewards in 2 consecutive months',
      rewardCost: 500
    },
    {
      rewardID: '9',
      rewardName: 'Payoff 200$',
      rewardIcon: require('../../images/money.png'),
      rewardDetails: 'Gain six Rewards in 4 consecutive months',
      rewardCost: 800
    },
    {
      rewardID: '10',
      rewardName: 'Trip to Turkey',
      rewardIcon: require('../../images/success.png'),
      rewardDetails: 'Gain four Rewards in 8 consecutive months',
      rewardCost: 1300
    },
    {
      rewardID: '11',
      rewardName: 'Workshop',
      rewardIcon: require('../../images/star1.png'),
      rewardDetails: 'Finish One month tasks effeciently before deadlines',
      rewardCost: 230
    }

  ];

  return (
    <>

      <div style={{ marginTop: '100px', }} className="titleRewards" >
        <h1 m={4} p={3}> Rewards </h1>
      </div>

      {/* this box shows the pts that employee had gained */}

      <Box m={4}>
        <Card className='pointsCard' sx={{alignText:'center'}} >
          <Stack p={2} >

              <CardGiftcardIcon className='CardGiftcardIconReward' />

              <Typography className="points">

                &nbsp; &nbsp;
                You Have: <span> 5.2 </span> points

              </Typography>

            <Typography fontSize="100px" color="green.400">
              {/* {loaded ? points : <CircularProgress color="secondary" />} */}
            </Typography>

          </Stack>
        </Card>
      </Box>

      <Container className="RewardsCardsContainer">

        {RewardsData &&
          RewardsData.map((reward) => (

            <Col key={reward.rewardID} xl={3} lg={6} md={6} sm={6}>

              <Rewards
                reward={reward}
                rewardName={RewardsData.rewardName}
                rewardIcon={RewardsData.rewardIcon}
                rewardDetails={RewardsData.rewardDetails} />

            </Col>

          ))}

      </Container>

    </>
  );
};

export default RewardsPage;