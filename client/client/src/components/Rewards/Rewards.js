import React, { useState } from "react";

import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";

import { updateprofile } from '../../actions/user';

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RedeemIcon from '@mui/icons-material/Redeem';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

import Star from '../../images/favourites.png';
import Coin from '../../images/dollar.png';
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
  const Myuser = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);

  let tempRewards = Myuser?.rewards || [];

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




  const handleRedeem = async (event) => {

    if (Myuser?.coins >= reward?.coin && Myuser?.coins > 0) {
      if (Myuser?.level >= reward?.permissionLevel) {
        if (window.confirm(`Are you sure you want to redeem ${reward.title} from your balance?`)) {

          tempRewards.push(reward._id);
          dispatch(updateprofile(currentId,
            {
              rewards: [...tempRewards],
              coins: Myuser?.coins - reward?.coin,
              experience: Myuser?.experience + 10,
              email: user?.result?.email
            }));



          const CustomToast = () => {

            return (

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all' }}>

                <Typography variant='subtitle2'> You have payed {reward?.title} </Typography>

                <Typography variant='subtitle2'> +10 expereince
                  <img src={Star} style={{ width: '17px', height: '17px', marginInline: '9px' }} />
                </Typography>

                <Typography variant='subtitle2'> -{reward?.coin} coins
                  <img src={Coin} style={{ width: '17px', height: '17px', marginInline: '9px' }} />
                </Typography>

              </div>

            )
          }

          const notify = () => { toast(<CustomToast />) }
          notify();

        }

        else { console.log('canceled') }
      }

      else {

        alert(`${reward.title} is not available in your level! Maybe after more experience!`);
        event.currentTarget.disabled = true;
      }
    }

    else {

      alert('You do not have enough coins! Maybe after you work litle harder!');
      event.currentTarget.disabled = true;
    }
  };


  let checkReward = Myuser?.rewards.filter(rewardArray => reward?._id === rewardArray);

  const Ka2es = () => {

    if (checkReward && checkReward?.length > 0 && checkReward[0] === reward?._id) {

      return (
        <EmojiEventsIcon
          style={{ color: '#7B00FF' }}
          fontSize='large' />
      )
    }

    else {
      return (
        <EmojiEventsIcon
          style={{ color: '#a3a3a3' }}
          fontSize='large' />
      )
    }
  }

  const RedeemButton = () => {

    if (checkReward && checkReward.length > 0 && checkReward[0] === reward._id) {

      return (
        <Typography paragraph className="OwnedDetails">
          <MilitaryTechIcon style={{ color: "#32bd8a" }} fontSize='large' /> <span>OWNED</span>
        </Typography>
      )
    }
    else {
      return (
        <Button
          className='RedeemBTN'
          variant="contained"
          startIcon={<RedeemIcon />}
          onClick={handleRedeem}>
          Redeem
        </Button>
      )
    }
  }




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

              <Ka2es />

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

              <Typography paragraph className="RewardDetails" style={{ fontWeight: '700' }}>
                Level {reward.permissionLevel}
              </Typography>

              <RedeemButton />

            </CardContent>
          </Collapse>

        </Card>

      </ScrollAnimation>
    </>

  );
};

export default Rewards;