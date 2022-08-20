
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '77vh',
        marginTop: "77px",
        border: '3px solid ',
        backgroundColor: '#EBEAEC',
        border: '3px solid #333', 
        borderRadius: 15, 
        padding: '2rem'
      },
      descriptionPart:{
         margin: '100px 0 0 30px',
         height: 430,
      },
      coin:{
        display: 'flex', alignItems:'center', fontSize:'1.2rem', fontWeight:700, gap: '14px',color: '#432874',
        marginBlock: '30px',
      },
      paper:{
        display: 'flex', flexDirection:' column', alignItems: 'center', width: '80%', backgroundColor: '#EBEAEC', border: '1px solid #333', borderRadius: 15, padding: '1rem', gap: '30px', marginBlock: '30px', cursor: 'pointer',
      }
}));

