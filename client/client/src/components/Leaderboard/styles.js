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
    borderRadius: 7,
    height: "120px",
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)",
    padding: "20px",
    width: "180px",
    backgroundColor:"#eee",
    marginLeft:"50px"
  },
  myFirstCard: {
    color: "#36205D",
    backgroundColor:"#eee",
    
  },
  bold: {
    fontWeight: 600,
  },
  cardBottom: {
    borderRadius: 7,
    height: "250px",
    width: "180px",
    backgroundColor: "#36205D",
    padding: "20px",
    marginTop: "25px",
    boxShadow: "0px 0px 64px -38px rgba(0,0,0,0.75)",
    marginLeft:"50px"
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
    paddingRight: "70px",
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
