import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
} from "assets/jss/material-dashboard-react.js";

const tableStyle = (theme) => ({
  warningTableHeader: {
    color: warningColor[0],
  },
  primaryTableHeader: {
    color: primaryColor[0],
  },
  tableHeaderColor:{
    color: "#322165",
  },
  dangerTableHeader: {
    color: dangerColor[0],
  },
  successTableHeader: {
    color: successColor[0],
  },
  infoTableHeader: {
    color: infoColor[0],
  },
  roseTableHeader: {
    color: roseColor[0],
  },
  grayTableHeader: {
    color: grayColor[0],
  },
  
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
    "@media (max-width:991px)":{
      display:"none"
    }
  },
  cardMargin:{
    marginBottom:"5px",
    borderRadius:"10px"
  },
  // start replace card in mobile veiw
  pairCard:{
    display:"none",
    "@media (max-width:991px)":{
      display:"block",
      display: "flex",
    flexWrap: "wrap",
    }
  },
 
  addPadding:{
    padding:"5px"
  },
  spaceAround:{
    justifyContent:"flex-end",
    flexWrap:"wrap",
  }
  ,
  // end replaceing card in mobile veiw
  tableBody:{
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "20px",
      fontFamily: "Cairo, sans-serif",
    },
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    textAlign : "right",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem",
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  dropPay:{
    boxShadow:"10px 10px 10px red !important",
  },
  dropPayItem:{
    fontFamily: "Cairo, sans-serif",
    "@media (max-width:767px)":{
      marginBottom:"10px !important"
    }

  },
  historyPayBtn:{
    color: '#3f51b5',
    border: '1px solid rgba(63, 81, 181, 0.5)',
    padding: '5px 15px',
    cursor: 'pointer',
    margin: '0',
    display:' inline-flex',
    outline: '0',
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    borderRadius: '0',
    verticalAlign: 'middle',
    borderRadius:"4px",
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    "&:hover":{
      background: 'rgba(63 , 81 , 181 , .8)',
    color: '#fff',
    }
  },
  modalOrderDetails: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "50%",
    borderRadius: "20px",
    margin: "3% auto",
    direction: "rtl",
    paddingTop:'70px',
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
});

export default tableStyle;
