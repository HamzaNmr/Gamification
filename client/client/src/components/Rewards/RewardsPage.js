import React from "react";
import { useSelector } from "react-redux";

import Rewards from './Rewards';

import Typography from '@mui/material/Typography';
import { Grow, Grid, Paper } from '@mui/material';

import Coin from '../../images/dollar.png';
import "./styles.css";




const RewardsPage = () => {


  const { rewards, isLoading } = useSelector((state) => state.rewards);

  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = user?.result?.id
  const Myuser = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);



  return (
    <>

      <Grow in>
        <div style={{ margin: '77px 0 30px 0' }}>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>


            <Grid item lg={12} xs={12}>
              <Paper style={{ backgroundColor: '#432874', padding: '7px 30px', borderRadius: 15, color: 'white', }}>

                <Typography variant='h6' style={{ display: 'flex', alignItems: 'center', }}>

                  <img alt='' src={Coin} style={{ width: 40, heigth: 40, marginRight: '14px' }} />
                  Your balance:
                  <span style={{ fontSize: '1.4rem', marginLeft: '30px' }} className='balanceText'>
                    {Myuser?.coins}
                  </span>

                </Typography>

              </Paper>
            </Grid>


            <Grid item lg={12} md={6} sm={12} xs={12} >
              <Paper className="RewardsCardsContainer" >

                {rewards &&
                  rewards.map((reward) => (

                    <div key={reward._id}>

                      <Rewards reward={reward} />

                    </div>

                  ))}

              </Paper>
            </Grid>


          </Grid>
        </div>
      </Grow>

    </>
  );
};

export default RewardsPage;
