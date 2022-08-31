import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    
    
    coin:{
      display: 'flex', alignItems:'center', fontSize:'1.2rem', fontWeight:700, gap: '12px', marginInline: '30px',color: '#432874'
    
    },

    card:{
      display: 'flex', height: '150px', backgroundColor: '#EBEAEC', width: '670px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexDirection: "column",
        height: 'auto',
      },
    },
    cardMedia:{
      width: '200px !important',
      [theme.breakpoints.down('sm')]: {
        width:'100% !important'
      },
    }
   
     
 }));