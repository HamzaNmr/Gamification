import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bar: {
    padding: "20px 30px",
    marginBottom: "14px",
    borderRadius: 7,
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)",
    // border: '3px solid gray',
    transition: ".5s ease-out",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  centered: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
    paddingTop: "10px",
  },

  number: {
    padding: "10px",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    color: "#eee",
    fontSize: "1.3rem",
    fontWeight: 700,
  },
  space: {
    marginLeft: "360px",
  },
  name: {
    color: "#eee",
    borderRadius: 7,
    fontWeight: "bold",
    height: "40px",
  },
  popover: {
    borderRadius: 7,
    backgroundColor: "#eee",
    color: "#36205D",
    padding: "20px",
    width: "150px",
    height: "50px",
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)"
    // display: "flex",
    // justifyContent: "center",
  },
  cardTop: {
    display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#ECEBED', borderRadius: 15,padding: '30px 50px',
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)",
    width: '350px',
    marginBottom: '30px',
    border: '3px solid #36205D'
  },
  myFirstCard: {
    color: "#36205D",
    backgroundColor:"#eee",
    
  },
  bold: {
    fontWeight: 600,
  },
  cardBottom: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',borderRadius: 15, padding: '30px 50px',
    backgroundColor: "#36205D",
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)",
    gap: "14px",
    marginBottom: '30px',
    width: '357px',
   
  },
  mySecondCard: {
    color: "#fbfbfb",
    backgroundColor: "#36205D",
  },
  myCard: {
    color: "#FFBE5D",
  },
  myContainer: {
    // marginRight:"50px",
    // marginLeft:"50px"
  },
  leftGrid: {
   
  },
  rightGrid: {
    marginLeft:"20px",
  },
  duration:{
    display: "flex",
    justifyContent: "center",
    gap: "1em",
},
cardTopRight:{
    marginRight:"100px",
    width:"100%"
}








}));
