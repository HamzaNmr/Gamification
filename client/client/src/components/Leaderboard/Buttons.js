import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import useStyles from "./styles";
import "./Style.css";

{
  /* <h1 className='leaderboard'>Leaderboard</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div> */
}

// export default function Buttons() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button color="secondary">Secondary</Button>
//       <Button variant="contained" color="success">
//         Success
//       </Button>
//       <Button variant="outlined" color="error">
//         Error
//       </Button>
//     </Stack>
//   );
// }

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





export default function Buttons() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };
  return (
    <Stack spacing={2} direction="row">
      <div className="classes.duration">
        <ColorButton variant="contained" onClick={handleClick} data-id="7" style={{
          backgroudColor:"#36205D"
        }}>
          7 Days
        </ColorButton>
        <ColorButton variant="contained" onClick={handleClick} data-id="30">
          30 Days
        </ColorButton>
        <ColorButton variant="contained" onClick={handleClick} data-id="0">
          All-Time
        </ColorButton>
      </div>
    </Stack>
  );
}


