import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

 paper:{
  backgroundColor: '#EBEAEC', height: '77vh', border: '3px solid #333', borderRadius: 15, padding: '2rem',
  [theme.breakpoints.down('md')]: {
    height: 'auto !important',
},
 },
 paperHero:{
  backgroundColor: '#EBEAEC', height: '77vh', border: '3px solid #333', borderRadius: 15, padding: '2rem',
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    height: 'auto !important',
},
 },
  commentButton:{
    borderRadius: 15,
    marginBottom: '5px',
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
    height:'77vh',
    overflow:  'auto',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
        height: '55vh',
    },
  },
  styleComment: {
  display:'flex',
  alignItems:'start',
  gap: '1rem',
  width: '95%',
  marginBottom: '1rem',
  marginBottom: '14px'
  },


  styleInnerComment:{
    marginTop: "5px",

    // style: https://css.glass/

    backgroundColor: 'rgba(150, 135, 219, 0.35)',
    borderRadius: '15px',
    boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8.5px)',
    border: '1px solid rgba(150, 135, 219, 0.22)',
    color: '#333',
    padding: '10px 20px',
    fontSize: '.8rem',
    marginTop: 0, 
  },

  

  // before:{
  //   position: 'absolute',
  //   left: '-5.8px',
  //   width: '20px',
  //   height: '20px',
  //   backgroundColor: '#CDCCCD',
   
  //   transform: 'rotate(135deg)',
  //   borderRadius: 3,
  
  // },

  styleCommentReply: {
    display:'flex',
    alignItems:'start',
    gap: '1rem',
    marginBottom: '1rem',
    width:'90%',
   padding: '20px 0px 20px 10%',
    },

    commentField:{
      position: 'absolute',
      top: '50%',
      left: '59%',
      width: '36%',
      [theme.breakpoints.down('md')]: {
        top: '120%',
      left: '5%',
      width: '90%',
    },
    }
}));