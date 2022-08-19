
import { makeStyles } from "@material-ui/core/styles";


 export default makeStyles((theme) => ({
   avatar:{
    marginBottom: '30px',
   },

    gridDiv:{
        display: 'flex', justifyContent: 'start', gap: '30px',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },

   centered:{
    display: 'flex', justifyContent: 'center', alignItems:'center', gap: '10px',
   },
 }));