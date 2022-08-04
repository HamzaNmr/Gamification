import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

 textField:{
    
    },
  commentButton:{
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#9687DB",
    color:"white",
    fontSize: "1.1rem",
    fontWeight:"600",
    transition: ".5s ease",
    '&:hover': {
      backgroundColor: "#9687DB",
      letterSpacing: "5px",
    },
  },
  commentsOuterContainer:{
    display: 'flex',
    flexDirection: 'column',
  },

  commentsInnerContainer:{
    height:'95vh',
    overflow:  'auto',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
        height: '65vh',
    },
  },
  styleComment: {
  display:'flex',
  alignItems:'start',
  gap: '1rem',
  marginBottom: '1rem',
  width:' 90%',
  },
  styleInnerComment:{
    marginTop: "5px",
    backgroundColor: '#9687DB',
    borderRadius: '15px',
    color: '#eee',
    padding: '10px 20px',
  }
}));