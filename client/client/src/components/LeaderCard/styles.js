import { makeStyles } from "@material-ui/core/styles";



 export default makeStyles((theme) => ({
    bar:{
        padding: '20px 30px',
        marginBottom: '14px',
        borderRadius: 7,
        boxShadow: '0px 0px 64px -38px rgba(0,0,0,0.75)',
        // border: '3px solid gray',
        transition: '.5s ease-out',
        '&:hover':{
            transform: 'scale(1.05)',
        }
    },
    centered:{
        display: 'flex', justifyContent: 'start', alignItems:'center', gap: '20px',
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
