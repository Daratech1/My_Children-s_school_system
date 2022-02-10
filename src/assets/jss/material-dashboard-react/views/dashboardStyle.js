
import { whiteColor } from "assets/jss/material-dashboard-react";

const dashboardStyle = {
  sliderBox: {
    display: "flex",
    justifyContent: "center",
    "&:first-of-type": {
      width: "80%",
      margin: "0 auto",
      // marginTop: "220px",
      "@media (max-width: 1400px)": {
        width: "100%",
        // marginTop: "90px",
      },
    },
    "&:nth-of-type(2)": {
      marginTop: "50px", 
    },
  },
  margin: {
    margin: "5px auto",
    "@media (max-width: 1400px)": {
      margin: "10px 5px",
    },
  },
  cardDash: {
    position: "relative",
    cursor:"pointer",
    "&:hover ": {
      flexGrow:"1"
    },
  },
  overlay:{
    // position: "absolute",
    // background: "#70707096",
    // right: "0",
    // top: "0",
    // bottom: "0",
    // width: "100%",
  },

  cardTitle:{
    position: "absolute",
    color: "#fff",
    bottom: "0"
  },
  mainTitle:{
    fontFamily: "Cairo, sans-serif ",
    fontWeight:"600",
    color: whiteColor,
  },
  disBlock:{
    "@media (max-width:767px)":{
      display:"block"
    }
  },
  fullwidth:{
    "@media (max-width:767px)":{
      maxWidth:"100%"
    }
  }
};

export default dashboardStyle;
