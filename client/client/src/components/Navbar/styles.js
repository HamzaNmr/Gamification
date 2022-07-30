import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    appBar: {
        padding: '0 30px',
        backgroundColor: "#432874",
        color: "white",
        position: 'fixed',
        top: 0,
        left: 0,
        height: '60px',
        justifyContent: 'center',
    },
      toolbar: {
        height: '100%',
        dispaly: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

    rightPart:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'max-content',
      cursor: 'pointer',
      fontSize:'16px',
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        display:'none',
      },
    },

    item:{
      padding: '10px',
      marginInline: '10px',
      transition: '.5s ease-out',
      '&:hover':{
        backgroundColor: 'rgba(120,0,200,1)',
        borderRadius: 15,
        color: '#eee',
      }
    }
     
 }));