import React from "react";
import Paper from "@material-ui/core/Paper";
import SmallTable from "./SubTable";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  textStartHead: {
    textAlign: "center",
    borderLeft: "1px solid #ddd",
    paddingTop: "16px !important",
  },
  textStartBody: {
    textAlign: "center",
    borderLeft: "1px solid #ddd",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const StudentTableShared = ({ assessmentData }) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={2}
      style={{
        backgroundColor: "#f5f5f6",
        width: "100%",
        borderRadius: "20px",
        margin: "3rem auto",
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.textStartHead}>أسم الطالب</TableCell>
              <TableCell className={classes.textStartHead} align="right">واجبات</TableCell>
              <TableCell className={classes.textStartHead} align="right">بحوث مشروعات التقارير</TableCell>
              <TableCell className={classes.textStartHead} align="right">أنشطه ومشاركه</TableCell>
              <TableCell className={classes.textStartHead} align="right">أدوات</TableCell>
              <TableCell className={classes.textStartHead} align="right">المجموع</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assessmentData.map((item, i) => {
              return item.marks.map((ele) => {
                return (
                  <TableRow key={ele.id}>
                    <TableCell className={classes.textStartBody} component="th" scope="row">
                      {ele.subject_name}
                    </TableCell>
                    <TableCell className={classes.textStartBody} align="right">{ele.home_work}</TableCell>
                    <TableCell className={classes.textStartBody} align="right">{ele.participation}</TableCell>
                    <TableCell className={classes.textStartBody} align="right">{ele.attention}</TableCell>
                    <TableCell className={classes.textStartBody} align="right">{ele.tools}</TableCell>
                    <TableCell className={classes.textStartBody} align="right">
                      {parseFloat(ele.home_work) +
                        parseFloat(ele.participation) +
                        parseFloat(ele.attention) +
                        parseFloat(ele.tools)}
                    </TableCell>
                  </TableRow>
                )

              });
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentTableShared;