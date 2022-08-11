import React, { useState } from "react";
import useStyles from "./styles";
import "./Style.css";
import { Paper, Typography, Avatar, Grow } from "@material-ui/core";
import Fire from "../../images/fire.png";
import Clapping from "../../images/clapping.png";
import Cool from "../../images/cool.png";
import Emogi1 from "../../images/emogi1.png";
import Emogi2 from "../../images/emogi2.png";
import Emogi3 from "../../images/emogi3.png";
import Emogi4 from "../../images/emogi4.png";
import Emogi5 from "../../images/emogi5.png";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function profiles({ MYLeaderboard }) {
  return (
    <div id="profile">
      {console.log(MYLeaderboard)}
      {Item(MYLeaderboard)}
    </div>
  );
}

function Item(data) {
  const classes = useStyles();

  //test start
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //test end

  return (
    <Grid container alignItems='stretch'>
      <Grid item lg={6} sm={12} className={classes.leftGrid}  style={{
        display: 'flex', flexDirection: 'column', alignItems: "end", paddingInline: '20px' 
      }}>

        {/* card top */}
        <div className={classes.cardTop}>
          {/* <Grid container className={classes.cardTop}>
            <Grid item xs={6}>
              <Typography className={classes.myFirstCard}>My rank</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.myFirstCard}>My score</Typography>
            </Grid> 
            <Grid item xs={6}>
              <Typography className={classes.myFirstCard}>
                <h2>3RD PLACE</h2>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <h2 className={classes.myFirstCard}>120</h2>
            </Grid>
          </Grid> */}
          <div>
          <Typography variant="subtitle1">My rank</Typography>
          <Typography variant="h4"> 3rd place</Typography>
          </div>

          <div>
          <Typography variant="subtitle1">Level</Typography>
          <Typography variant="h4">120</Typography>
          </div>

        </div>

      {/* card bottom */}
        <div className={classes.cardBottom}>
    
              <Typography variant="h5" className={classes.mySecondCard}>
               Top Leader in IT MAX
              </Typography>
              <Avatar
                alt=""
                src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360"
                style={{
                  width: 100,
                  height: 100,
                 
                }}
              />
            <div>
              <Typography variant="h5" className={classes.mySecondCard}>
                HAMZA NEMER
              </Typography>
            
            <Typography className={classes.myCard}>
              @Hamza_Nemer
            </Typography>
            </div>
         
        </div>



      </Grid>

{/* /////////////////////////////////////////////////////////////////////// */}

    <Grid item sm={12} lg={6} className={classes.rightGrid}>
      
        
         

            <Grow in>
              <Paper
                style={{
                  borderRadius: 15,
                  backgroundColor: "#36205D",
                  padding: "20px",
                  width: '70%'
                }}
              >
                {data.map((user, index) => (
                  <Paper className={classes.bar} key={index}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <Grid item xs={1}>
                        <div
                          className={classes.number}
                          style={{
                            backgroundColor: `${user.bgcolor}`,
                            color: `${user.color}`,
                          }}
                        >
                          {user.rank}
                        </div>
                      </Grid>
                      <Grid item xs={1}>
                        <div
                          style={{ color: "#333" }}
                          className={classes.centered}
                        >
                          <Avatar
                            alt=""
                            //   src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360"
                            src={user.img}
                            style={{
                              width: 50,
                              height: 50,
                              border: "1px solid #36205D",
                            }}
                          ></Avatar>
                        </div>
                      </Grid>

                      {/* <Typography
                    variant="subtitle1"
                    className={classes.name}
                    style={{ backgroundColor: `${user.nameColor}` }}
                  >
                    {user.name}
                  </Typography> */}

                      {/* //test start */}

                      <Grid item xs={12}>
                        <div>
                          <Typography variant="subtitle1">
                            {user.name}
                          </Typography>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                          >
                            <Typography className={classes.popover}>
                              <h3>{user.date}</h3>
                              <span>{user.location}</span>
                            </Typography>
                          </Popover>
                        </div>

                        {/* // test end */}

                        <Typography
                          variant="caption"
                          style={{ color: "#36205D", fontWeight: "bold" }}
                          className={classes.centeredd}
                        >
                          @{user.username}
                        </Typography>

                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: "12px", color: "#36205D" }}
                        >
                          {user.date}
                        </Typography>
                        {/* </div>
                  </div> */}
                      </Grid>
                      <Grid item xs={6}></Grid>

                      {/* // <div className={classes.space}></div> */}
                      <Grid item xs={2}>
                        <div className={classes.centered}>
                          <span
                            style={{
                              color: `${user.levelColor}`,
                              fontWeight: "900",
                            }}
                          >
                            {user.level}
                          </span>
                          <img
                            alt=""
                            src={user.emoji}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                      </Grid>
                    </div>
                  </Paper>
                ))}
              </Paper>
            </Grow>
          </Grid>
       

     
    </Grid>
  );
}

//comment for testing

// <>
//   {data.map((value, index) => (
//     <div className="flex" key={index}>
//       <div className="item">
//         <img src={value.img} alt="" />

//         <div className="info">
//           <h3 className="name text-dark">{value.name}</h3>
//           <span>{value.location}</span>
//         </div>
//       </div>
//       <div className="item">
//         <span>{value.score}</span>
//       </div>
//     </div>
//   ))}
// </>
