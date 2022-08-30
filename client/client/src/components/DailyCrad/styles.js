import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    addButton:{
        borderRadius: 5,
        backgroundColor: '#32BD8A',
        color: '#eee',
        transition: '.5s ease-in',
        '&:hover':{
            backgroundColor: '#E9E8EA',
            color: '#32BD8A',
        },

    },

    deleteButton:{
        borderRadius: 5,
        backgroundColor: '#FE6463',
        color: '#eee',
        transition: '.5s ease-in',
        '&:hover':{
            backgroundColor: '#E9E8EA',
            color: '#FE6463',
        },

    },

    paperHero:{
        backgroundColor: '#F2F2F2', height: '77vh', border: '3px solid #333', borderRadius: 15, padding: '2rem',
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
          height: 'auto !important',
      },
       },

    spaces:{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '20px 30px', backgroundColor: '#E9E8EA', borderRadius: 15, marginBottom: '20px', 
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '30px'
        },
    },
    image:{
        width: '3%',
        [theme.breakpoints.down('md')]: {
            width: '10%'
        },
    }
 }));