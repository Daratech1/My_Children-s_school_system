import {
  defaultFont,
  dangerColor,
  whiteColor,
} from "assets/jss/material-dashboard-react.js";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.js";

const headerLinksStyle = (theme) => ({
  ...dropdownStyle(theme),
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0px",
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "30px",
        height: "30px",
        marginRight: "0px",
        marginLeft: "0",
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "0px",
        marginLeft: "0",
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%",
      },
    },
    "& svg": {
      width: "30px",
      height: "30px",
    },
  },

  margin: {
    zIndex: "4",
    margin: "0",
  },
  searchIcon: {
    width: "17px",
    zIndex: "4",
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + whiteColor,
      right: "4px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px",
    },
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    display: "inline-block",
    margin: "0 20px",
  },
  profileLink: {
    fontFamily:"cairo"
  }
});

export default headerLinksStyle;
