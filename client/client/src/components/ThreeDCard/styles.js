
import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    container:{
        width: '100%',
        height: '100%',
        perspective: '1000px',
    },
    
    card:{
        margin:' 0 auto',
        transformStyle: 'preserve-3d',
        width: '60%',
        height: '325px',
        backgroundColor: '#9687DB',
        textAlign: 'center',
        padding: '10px',
        boxshadow: '0 30px 40px rgba(242, 242, 252, 0.7) 0 0px 50px rgba(242, 242, 255, 0.7)',
        border: '7px solid #333',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    
    image:{
        width: '250px',
        height: '150px',
        zIndex: 999,
        position: 'relative',
        border: '5px solid #333',
        borderRadius: 15,
        [theme.breakpoints.down('md')]: {
            width: '170px',
           height: '150px',
        },
    },

    paragraph:{
        width: '92%',
        height: '50px',
        backgroundColor: '#eee',
        borderRadius: 15,
        border: '3px solid #333',
        padding: '.5rem',
        marginTop: '10px',
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '92%',
        backgroundColor: '#eee',
        borderRadius: 15,
        border: '3px solid #333',
        padding: '.5rem',
        marginBottom: '20px',
    }
 }));

