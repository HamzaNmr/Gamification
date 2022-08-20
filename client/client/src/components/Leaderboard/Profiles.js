import React, { useState } from "react";
import useStyles from "./styles";
import "./Style.css";
import { Paper, Typography, Avatar, Grow } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-animate-on-scroll";
import meditatingAnime from '../../images/meditatingAnime.gif'

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


  return (
    <Grid container alignItems='stretch'>
      <Grid item lg={4} sm={12} className={classes.leftGrid}  style={{
        display: 'flex', flexDirection: 'column', alignItems: "end", paddingInline: '20px' 
      }}>

        {/* card top */}
        <ScrollAnimation animateIn="animate__bounceInLeft" >
        <div className={classes.cardTop}>
        
          <div>
          <Typography variant="subtitle1">My rank</Typography>
          <Typography variant="h4"> 3rd place</Typography>
          </div>

          <div>
          <Typography variant="subtitle1">Level</Typography>
          <Typography variant="h4">120</Typography>
          </div>

        </div>
        
      </ScrollAnimation>
      {/* card bottom */}
      <ScrollAnimation animateIn="animate__bounceInLeft" >
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
        </ScrollAnimation>

      </Grid>

{/* /////////////////////////////////////////////////////////////////////// */}

    <Grid item sm={12} lg={5} className={classes.rightGrid}>
      
        
         

            <ScrollAnimation animateIn="animate__bounceInRight" >
              <Paper className={classes.leaderboardCard}>
              <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', marginBottom: '14px'}}>
              <div style={{color: 'white', marginLeft: '35px'}} className={classes.centered} >
                    <Typography variant="body2">Rank</Typography>
                    <Typography variant="body2">Players</Typography>
              </div>
              <div style={{color: 'white', marginRight: '50px'}}>
                <Typography variant="body2"># Level</Typography>
              </div>
              </div>
                {data.map((user, index) => (
                  // <Paper className={classes.bar} key={index}>
                  //   <div
                  //     style={{
                  //       display: "flex",
                  //       alignItems: "center",
                  //       gap: "30px",
                  //     }}
                  //   >
                  //     <Grid item xs={1}>
                  //       <div
                  //         className={classes.number}
                  //         style={{
                  //           backgroundColor: `${user.bgcolor}`,
                  //           color: `${user.color}`,
                  //         }}
                  //       >
                  //         {user.rank}
                  //       </div>
                  //     </Grid>
                  //     <Grid item xs={1}>
                  //       <div
                  //         style={{ color: "#333" }}
                  //         className={classes.centered}
                  //       >
                  //         <Avatar
                  //           alt=""
                  //           //   src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360"
                  //           src={user.img}
                  //           style={{
                  //             width: 50,
                  //             height: 50,
                  //             border: "1px solid #36205D",
                  //           }}
                  //         ></Avatar>
                  //       </div>
                  //     </Grid>

                  //     {/* <Typography
                  //   variant="subtitle1"
                  //   className={classes.name}
                  //   style={{ backgroundColor: `${user.nameColor}` }}
                  // >
                  //   {user.name}
                  // </Typography> */}

                  //     {/* //test start */}

                  //     <Grid item xs={12}>
                  //       <div>
                  //         <Typography variant="subtitle1">
                  //           {user.name}
                  //         </Typography>
                  //         <Popover
                  //           id={id}
                  //           open={open}
                  //           anchorEl={anchorEl}
                  //           onClose={handleClose}
                  //           anchorOrigin={{
                  //             vertical: "top",
                  //             horizontal: "right",
                  //           }}
                  //         >
                  //           <Typography className={classes.popover}>
                  //             <h3>{user.date}</h3>
                  //             <span>{user.location}</span>
                  //           </Typography>
                  //         </Popover>
                  //       </div>

                  //       {/* // test end */}

                  //       <Typography
                  //         variant="caption"
                  //         style={{ color: "#36205D", fontWeight: "bold" }}
                  //         className={classes.centeredd}
                  //       >
                  //         @{user.username}
                  //       </Typography>

                  //       <Typography
                  //         variant="subtitle1"
                  //         style={{ fontSize: "12px", color: "#36205D" }}
                  //       >
                  //         {user.date}
                  //       </Typography>
                  //       {/* </div>
                  // </div> */}
                  //     </Grid>
                  //     <Grid item xs={6}></Grid>

                  //     {/* // <div className={classes.space}></div> */}
                  //     <Grid item xs={2}>
                  //       <div className={classes.centered}>
                  //         <span
                  //           style={{
                  //             color: `${user.levelColor}`,
                  //             fontWeight: "900",
                  //           }}
                  //         >
                  //           {user.level}
                  //         </span>
                  //         <img
                  //           alt=""
                  //           src={user.emoji}
                  //           style={{ width: "20px", height: "20px" }}
                  //         />
                  //       </div>
                  //     </Grid>
                  //   </div>
                  // </Paper>
                  <Paper className={classes.bar} key={index}>
                  <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between',}}>
                  
                      <div style={{color: '#333'}} className={classes.centered}>
                       <div className={classes.number} style={{backgroundColor: `${user.bgcolor || '#333'}`}}>{user.rank}</div>
                        <Avatar alt="" src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360' style={{width: 50, height: 50, border: '1px solid #36205D'}}>
                        </Avatar>
                        <div>
                        <Typography variant='subtitle1' style={{fontWeight: 500}}>
                          {user.name}
                        </Typography>
                        <Typography variant='caption'  style={{color: '#36205D', fontWeight: 'bold'}} className={classes.centered}>
                          @{user.username}
                        </Typography>
                        </div>
                      </div>
                      <div className={classes.centered}>
                          <span style={{color:`${user.bgcolor || '#333'}`, fontWeight: '900'}}>{user.level}</span>
                          <img alt='' src={user.emoji} style={{width:'20px', height: '20px'}}/>
                      </div>
                  </div>
              </Paper>
                ))}
              </Paper>
              </ScrollAnimation>
          </Grid>
       
       <Grid item lg={3} sm={12}>
       <ScrollAnimation animateIn="animate__bounceInRight" >
       <div>
       <img src={meditatingAnime} alt="" style={{width: 300, height: 300}}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
              backgroundColor: '#EBEAEC', border: '3px solid #333', borderRadius: 15, padding: '1rem'}}>
        <Typography variant="h4">
          Dear,
        </Typography>
        <Typography variant="h6">
          Go, and be the first one here. The hard work will make you the best.
        </Typography>
        </div>
       </div>
       </ScrollAnimation>
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
