import React, { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RedeemIcon from '@mui/icons-material/Redeem';
import ScrollAnimation from "react-animate-on-scroll";
import Coin from '../../images/dollar.png';

import "animate.css/animate.min.css";
import "./styles.css";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Rewards = ({ reward }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (

    <>
      <Grid item p={3}>
        <div className="layOutReward">

          <ScrollAnimation animateIn="animate__bounceInLeft" >

            <Card sx={{ maxWidth: 345 }} className="CardReward">

              <CardHeader
                m={4} p={3}
                className="CardHeaderReward"
                title={reward.rewardName}
              />

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  className="CardMediaReward"
                  component="img"
                  image={reward.rewardIcon}
                  alt="reward icon"
                />
              </div>

              <CardActions disableSpacing className="CardActionsReward">

                <span className="RewardDetails">

                  {/* emoji color changes if one of user rewards matches id of this reward
                      also btn redeem is displayed */}
                  {/* owned color #8843f2 add shadow for effects */}

                  <EmojiEventsIcon
                    className="isOwned" id='isOwned'
                    aria-label="isOwned"
                    style={{ color: '#a3a3a3' }}
                    fontSize='large' />

                  <img src={Coin} className='CoinIconReward' />
                  <span className='CoinAmountReward'> {reward.rewardCost} </span>

                </span>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>

              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="howToGetReward">

                  <Typography paragraph className="RewardDetails">
                    {reward.rewardDetails}
                  </Typography>

                  <br></br>

                  <Button
                    className='RedeemBTN'
                    variant="contained"
                    startIcon={<RedeemIcon />}
                  >
                    Redeem
                  </Button>

                </CardContent>
              </Collapse>

            </Card>

          </ScrollAnimation>

        </div>
      </Grid>
    </>

  );
};

export default Rewards;