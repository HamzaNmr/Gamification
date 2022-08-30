import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    gridDiv:{
        display: 'flex', justifyContent: 'start', gap: '30px',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    centered:{
        display: 'flex', justifyContent: 'center', alignItems:'center', gap: '10px',
       },
    span:{
        color: '#333',
        fontSize: '.7rem'
    },
    img:{
        width: 50,
        height: 50,
        margin: '20px',
    },
    coin:{
        display: 'flex', alignItems:'center', fontSize:'1.2rem', fontWeight:700, gap: '12px', marginInline: '30px',
        [theme.breakpoints.down('sm')]: {
          display:'none',
        },
      },
 
  card: {
    width: '7rem',
    borderRadius: '15px',
    height: '7rem',
    position: 'relative',
    margin: '10px',
    textAlign: 'center',
    padding: '10px 20px',
  },
  description: {
    color: "#333",
  },

  spaces:{
    padding: '0 50px', display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }
  
 }));