import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import RegularButton from "components/CustomButtons/Button";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function PerTable(props) {
  
  let a = moment();

  moment.locale('ar')
  const classes = useStyles();
  const { tableHead, tableData} = props;
  return (
    <>
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
          {tableData.map((prop) => {
            return (
              <tr key={prop.id}>
                <td className="">
                  {prop.student_name}
                </td>
                <td>{moment(prop.pickup_time).locale('ar').format("dddd_ ll __ h:mm a ")}</td>
                <td>{prop.pickup_persion}</td>
                <td>{prop.permission_reson}</td>
                <td>{prop.permission_duration}</td>
                <td><RegularButton variant="contained" color={prop.case_color}>
                {prop.case_name} 
      </RegularButton> </td>
                
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </div>
  
    </>
  );
}

PerTable.defaultProps = {
  tableHeaderColor: "gray",
};

PerTable.propTypes = {
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
