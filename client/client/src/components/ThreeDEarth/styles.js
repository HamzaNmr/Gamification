
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  
   container:{
       [theme.breakpoints.down('md')]: {
           display: 'none',
       },
   },

}));