import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import RegularButton from "components/CustomButtons/Button";

import moment from "moment";
import 'moment/locale/ar'
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function StudentTableAbsence(props) {
  const classes = useStyles();

  let a = moment();

  moment.locale('ar')
  const tableHeaderColor = "primary";
  const tableHead = ["التاريخ", "الحالة", "السبب"];

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes.tableHeaderColor}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody className={classes.tableBody}>
          {props.data.map((prop,i) => {
            return (
              <tr key={i}>
                <td>{moment(prop.date).locale('ar').format("dddd_ ll ")}</td>
                <td><RegularButton variant="contained" color={prop.color}>
                {prop.status} 
      </RegularButton> </td>
                <td>{prop.reason}</td>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

StudentTableAbsence.defaultProps = {
  tableHeaderColor: "gray",
};

StudentTableAbsence.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.array,
};
