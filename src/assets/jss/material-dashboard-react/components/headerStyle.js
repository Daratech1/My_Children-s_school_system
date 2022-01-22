import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "20px",
    zIndex: "1029",
    color: grayColor[7],
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
    paddingLeft: "200px",
    "@media (max-width: 1400px)": {
      paddingLeft: "5px",
  }
  },
  container: {
    ...container,
    minHeight: "50px",
    // flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  flex: {
    flex: 1,
    "@media (max-width: 767px)": {
    position: "absolute",
    top: "63px",
    background: "#fff",
    width: "100%",
    right: "0",
    height: "0",
    overflow: "hidden",
    padding: "0",
    transition:"all .3s ease-in"
  }
  },
  navIcon:{
    width: "35px",
    height: "35px",
    cursor: "pointer",
    padding:"10px",
    border:"1px solid #ddd",
    display:"none",
    "@media (max-width: 767px)": {
      display:"block",
    }
  },
  opennavIcon:{ 
    flex: 1,
    "@media (max-width: 767px)": {
    position: "absolute",
    top: "63px",
    background: "#fff",
    width: "100%",
    right: "0",
    height:"auto",
    overflow:"auto",
    padding:"20px",
    transition:"all .3s ease-in"
  }  
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent",
    },
    "@media (max-width: 1400px)": {
      padding: "5px 14px",
    },
    "@media (max-width: 1024px)": {
      padding: "5px 10px",
      fontSize: "11px",
    },
    "@media (max-width: 767px)": {
      padding: "20px",
      fontSize: "11px",
      display: "block",
      textAlign:"start",
    }
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  }, 
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  borders:{
    width: "35px",
    height: "35px",
    border: "1px solid #ddd",
    padding: "10px",
    "@media (max-width:767px)":{
      display: "flex",
    alignItems: "center",
    justifyContent: "center",
    }
  }
});

export default headerStyle;
