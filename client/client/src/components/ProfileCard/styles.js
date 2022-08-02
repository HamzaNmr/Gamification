
import { makeStyles } from "@material-ui/core/styles";


 export default makeStyles((theme) => ({
    // paper:{
    //     backgroundColor: '#36205D',
    //     padding: '2rem 3rem',
    //     borderRadius: 15,
    // }, 

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