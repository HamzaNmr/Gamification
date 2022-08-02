
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
        height: '90%',
        backgroundColor: '#9687DB',
        textAlign: 'center',
        padding: '10px',
        boxshadow: '0 30px 40px rgba(242, 242, 252, 0.7) 0 0px 50px rgba(242, 242, 255, 0.7)',
        border: '7px solid rgb(0, 6, 39)',
        borderRadius: '15px',
    
    },
    
    image:{
        width: '75%',
        zIndex: 999,
        position: 'relative',
       
    },

    paragraph:{
        width: '92%',
        height: '50px',
        backgroundColor: '#eee',
        borderRadius: 15,
        border: '3px solid #333',
        padding: '.5rem',
        marginTop: '20px',
    }
 }));

