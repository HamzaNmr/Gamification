import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
      },

      buttonSubmit: {
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: "#26C0AB",
        color:"#00494D",
        fontSize: "1.1rem",
        fontWeight:"600",
        transition: ".5s ease",
        '&:hover': {
          
          letterSpacing: "3px",
        },
      },
      
      clearButton:{
        borderRadius: 7,
        backgroundColor: "#00494D",
        color:"#C5E4E7",
        fontSize: "1.1rem",
        fontWeight:"600",
        transition: ".5s ease",
        '&:hover': {
       
          letterSpacing: "3px",
        },
      },
  
 }));