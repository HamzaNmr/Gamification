import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    addButton:{
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        borderRadius: 5,
        transform: 'rotate(45deg)',
        backgroundColor: '#32BD8A',
        color: '#eee',
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '1.9s ease',
        '&:hover':{
            backgroundColor: '#32BD77',
            transform: 'rotate(405deg)',
        },




    }
 }));