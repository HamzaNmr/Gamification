import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updateprofile } from '../../actions/user';



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import handleRedeem from './ConfirmAction';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RedeemIcon from '@mui/icons-material/Redeem';

import Coin from '../../images/dollar.png';

import ScrollAnimation from "react-animate-on-scroll";

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

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = user?.result?.id
  const Myuser= useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
  const [rewardsArray, setRewardsArray] = useState(Myuser?.rewards || []);

  let tempRewards = rewardsArray;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [isOwnedColor, setIsOwnedColor] = useState(false);
  let isOwnedCheck = isOwnedColor ? '#7B00FF' : '#a3a3a3';

  const handleRedeem1 = async (event) => {
    if (window.confirm(`Are you sure you want to redeem ${reward.rewardName} from your balance?`)) {


      tempRewards.push(reward._id);  
      dispatch(updateprofile(currentId,{rewards: [...tempRewards] , coins: Myuser?.coins - reward?.coin ,  email: user?.result?.email}));

      
      setIsOwnedColor(isOwnedColor => !isOwnedColor)
      event.currentTarget.disabled = true;
      // console.log(`${reward.rewardName} added to db, your new blance ${balance}`)
    }
    else { console.log('canceled') }
  };

  return (

    <>
      <ScrollAnimation animateIn="animate__bounceInLeft" >

        <Card className="CardReward">

          <CardHeader
            m={4} p={3}
            className="CardHeaderReward"
            title={reward.title}
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              className="CardMediaReward"
              component="img"
              image={reward.photo}
              alt="reward icon"
            />
          </div>

          <CardActions disableSpacing className="CardActionsReward">

            <span className="RewardDetails">

              {/* emoji color changes if one of user rewards matches id of this reward
                  also btn redeem is displayed 
                  isOwned true state color #7B00FF */}

              <EmojiEventsIcon
                style={{ color: isOwnedCheck }}
                fontSize='large' />

                


              <img src={Coin} className='CoinIconReward' />
              <span className='CoinAmountReward'> {reward.coin} </span>

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
            <CardContent className="howToGetReward" >

              <Typography paragraph className="RewardDetails" >
                {reward.description}
              </Typography>

              <br></br>

              <Button
                className='RedeemBTN'
                variant="contained"
                startIcon={<RedeemIcon />}
                onClick={handleRedeem1}
              >
                Redeem
              </Button>

            </CardContent>
          </Collapse>

        </Card>

      </ScrollAnimation>
    </>

  );
};

export default Rewards;