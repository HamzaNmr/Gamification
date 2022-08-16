import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import useStyles from "./styles";

const Input = ({ name, handleChange, handleShowPassword, label, rows, half, autoFocus, type }) => {
    const classes = useStyles();
   return(

        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
            className={classes.textField}
             name={name}
             onChange={handleChange}
             variant="filled"
             fullWidth
             label={label}
             autoFocus={autoFocus}
             type={type}
             rows={rows}
             InputProps={ name === 'password' ? {
                   endAdornment: (
                     <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            { type === 'password' ? <Visibility /> : <VisibilityOff /> }
                        </IconButton>
                     </InputAdornment>
                   )
                } : null}
            />
        </Grid>
   );
  
}

export default Input;