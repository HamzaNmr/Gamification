import { makeStyles } from "@material-ui/core/styles";



 export default makeStyles((theme) => ({
    bar:{
        padding: '20px 30px',
        marginBottom: '14px',
        borderRadius: 7,
        boxShadow: '0px 0px 64px -38px rgba(0,0,0,0.75)',
        transition: '.5s ease-out',
        '&:hover':{
            transform: 'scale(1.05)',
        },
        [theme.breakpoints.down('sm')]: {
           width: '250px'
         },    
    },

    spaces:{
        display: 'flex', alignItems:'center', justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
           flexDirection: 'column',
           justifyContent:'center',
        },
    },
    centered:{
        display: 'flex', justifyContent: 'start', alignItems:'center', gap: '20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent:'center',
         },
       },
    number:{
        padding: '10px',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        color: 'white',
        fontSize: '1.3rem',
        fontWeight: 700,
    }
 }));
