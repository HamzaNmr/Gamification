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

import Star from '../../images/favourites.png';
import { toast } from 'react-toastify';

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
  const [isOwnedColor, setIsOwnedColor] = useState(false);

  let tempRewards = rewardsArray;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  


 

  const handleRedeem1 = async (event) => {
    if (window.confirm(`Are you sure you want to redeem ${reward.rewardName} from your balance?`)) {


      tempRewards.push(reward._id);  
      dispatch(updateprofile(currentId,{rewards: [...tempRewards] , coins: Myuser?.coins - reward?.coin , experience: Myuser?.experience + 10,  email: user?.result?.email}));

      const CustomToast = () => {
        return(
          <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all'}}>
            <Typography variant='subtitle2'>You have payed {reward?.title}</Typography>
             <Typography variant='subtitle2'>+10 expereince
             <img src={Star} alt="" style={{width: '17px', height: '17px', marginInline: '9px'}}/>
             </Typography>
             <Typography variant='subtitle2'> -{reward?.coin} coins
             <img src={Coin} alt="" style={{width: '17px', height: '17px', marginInline: '9px'}}/>
             </Typography>
          </div>
        )
      }
    
      const notify = () => {
        toast(<CustomToast/>)
      }
      notify();
      // setIsOwnedColor(isOwnedColor => !isOwnedColor)
      // event.currentTarget.disabled = true;
      // console.log(`${reward.rewardName} added to db, your new blance ${balance}`)
    }
    else { console.log('canceled') }
  };


  
  
 
  
  let checkReward = Myuser?.rewards.filter(rewardArray => reward?._id === rewardArray);
 
const Ka2es = () => {
  if(checkReward?.length > 0 && checkReward[0] === reward?._id){
   return (
    <EmojiEventsIcon
    style={{ color: '#7B00FF' }}
    fontSize='large' />
   )
  }else{
    return(<EmojiEventsIcon
    style={{ color: '#a3a3a3' }}
    fontSize='large' />)
  }
}

const RedeemButton = () => {
  if(checkReward.length > 0 && checkReward[0] === reward._id){
    return (
     'owned'
    )
   }else{
     return(
      <Button
        className='RedeemBTN'
        variant="contained"
        startIcon={<RedeemIcon />}
        onClick={handleRedeem1}>
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

              {/* emoji color changes if one of user rewards matches id of this reward
                  also btn redeem is displayed 
                  isOwned true state color #7B00FF */}

              <Ka2es/>
                


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

              <RedeemButton/>

            </CardContent>
          </Collapse>

        </Card>

      </ScrollAnimation>
    </>

  );
};

export default Rewards;