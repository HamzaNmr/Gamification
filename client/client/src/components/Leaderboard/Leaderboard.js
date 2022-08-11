import React, { useState } from "react";
import Profiles from "./Profiles";
import Buttons from "./Buttons";
import { MYLeaderboard } from "./Database";
import "./Style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { ClassNames } from "@emotion/react";
import useStyles from "./styles";

// export default function Leaderboard() {

const Leaderboard = () => {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div className="board" style={{
      marginTop:"77px"
    }} >
      
   
   
      {/* <Buttons /> */}

      <Profiles MYLeaderboard={between(MYLeaderboard, period)} />
      
    </div>
  );
};

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.date);
    if (between === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.level === b.level) {
      return b.level - a.level;
    } else {
      return b.level - a.level;
    }
  });
}

export default Leaderboard;
