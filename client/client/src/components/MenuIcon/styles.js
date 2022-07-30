import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
   displayed: {
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        display:'flex',
        alignItems: 'center',
        marginLeft: '10px',

      },
   }
     
 }));