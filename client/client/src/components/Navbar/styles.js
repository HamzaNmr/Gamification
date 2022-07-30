import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    appBar: {
        padding: '0 30px',
        backgroundColor: "#432874",
        color: "#eee",
        position: 'fixed',
        top: 0,
        left: 0,
    },
      toolbar: {
        dispaly: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
     
 }));