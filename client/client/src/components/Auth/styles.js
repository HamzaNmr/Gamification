import { makeStyles } from '@material-ui/core/styles';

const useStyles =makeStyles((theme) => (
{
    inputStyle:{
        backgroundColor: '#eee',
        borderRadius: '5px',
    },

    signInUpStyle:{
        marginTop: '1rem',
    },

    signInUpColor:{
        color:'#333',
    },
    
    btnStyle:{
    backgroundColor:'#9687DB',
    '&:hover':{
    backgroundColor:'#432874',                                    
    }
}
}
));
export default useStyles;