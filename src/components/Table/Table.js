import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
// import {Link} from "react-router-dom"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { tableHead, tableData, handleOpen, getId, handleOpenMeeting } = props;

  


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getId(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleOpenMeeting();
  };
  // href={`/admin/paybook/${prop.id}`}
  const handelPayMentId = (e) => {
    console.log(e.target)
    let idd = e.target.id;
    history.push(`/admin/paybook/`, { myParam: idd });
  };
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes.tableHeaderColor}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                  key={key}
                    className={classes.tableCell + " " + classes.tableHeadCell}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody className={classes.tableBody}>
          {tableData.length > 0 ? (
            tableData.map((prop) => {
              return (
                <tr key={prop.id}>
                  <td className="table-avatar">
                    {prop.gender_id === "1" ? (
                      <Avatar
                        alt="Remy Sharp"
                        src="https://image.flaticon.com/icons/png/512/190/190600.png"
                        className={classes.large}
                      />
                    ) : (
                      <Avatar
                        alt=""
                        src="https://media.istockphoto.com/vectors/european-in-hijab-vector-illustration-a-fairskinned-muslim-woman-vector-id1211606262?k=20&m=1211606262&s=612x612&w=0&h=cNHeekspjhRupOGa2uylejnznaq8huJobb0uYoeSop0="
                        className={classes.large}
                      />
                    )}
                    <span>{prop.student_name}</span>{" "}
                  </td>
                  <td>{prop.national_id}</td>
                  <td>{prop.class_name}</td>
                  <td>{prop.level_name}</td>

                  <td>لم يتم</td>
                  <td>
                    {prop.status != null ? (
                      <Button variant="contained" size="large" color="error">
                        تحديد موعد المقابلة
                      </Button>
                    ) : (
                      <></>
                    )}

                    {/* <div onClick={handleClick}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleOpen()}
                        className={classes.dropPayItem}
                      >
                        الدفع
                      </Button>
                    </div> */}
                  </td>
                  <td 
                 
                  >
                    <button
                      variant="outlined"
                      color="primary"
                      id={prop.id}
                      onClick={(e) => handelPayMentId(e)}
                      className={classes.historyPayBtn}
                    >
                      سجل المدفوعات
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                لا يوجد أبناء مقيدة لديك
              </td>
            </tr>
          )}
        </TableBody>
      </Table>

      <div className={classes.pairCard}>
        {tableData.length > 0 ? (
          tableData.map((prop) => {
            return (
              <Grid xs={12} sm={6} md={6} item className={classes.addPadding} key={prop.id}>
                <Card className={classes.cardMargin}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="h2">
                        الإسم:{" "}
                        <span>
                          {" "}
                          <Typography
                            variant="body2"
                            style={{ color: "rgb(49 33 99)", fontSize: "16px" }}
                            component="span"
                          >
                            {prop.student_name}
                          </Typography>{" "}
                        </span>
                      </Typography>

                      <Typography gutterBottom variant="body2" component="h2">
                        الرقم:{" "}
                        <span>
                          {" "}
                          <Typography
                            variant="body2"
                            style={{ color: "rgb(49 33 99)", fontSize: "16px" }}
                            component="span"
                          >
                            {prop.national_id}
                          </Typography>{" "}
                        </span>
                      </Typography>

                      <Typography gutterBottom variant="body2" component="h2">
                        القسم:{" "}
                        <span>
                          {" "}
                          <Typography
                            variant="body2"
                            style={{ color: "rgb(49 33 99)", fontSize: "16px" }}
                            component="span"
                          >
                            {prop.class_name}
                          </Typography>{" "}
                        </span>
                      </Typography>

                      <Typography gutterBottom variant="body2" component="h2">
                        الفصل:{" "}
                        <span>
                          {" "}
                          <Typography
                            variant="body2"
                            style={{ color: "rgb(49 33 99)", fontSize: "16px" }}
                            component="span"
                          >
                            {prop.level_name}
                          </Typography>{" "}
                        </span>
                      </Typography>

                      <Typography gutterBottom variant="body2" component="h2">
                        حاله الدفع:{" "}
                        <span>
                          {" "}
                          <Typography
                            variant="body2"
                            style={{ color: "rgb(49 33 99)", fontSize: "16px" }}
                            component="span"
                          >
                            {prop.Student_care === "0"
                              ? "لم يتم الدفع"
                              : "تم الدفع"}
                          </Typography>{" "}
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions
                    className={classes.spaceAround}
                    onClick={handleClick}
                  >
                    <Button
                      style={{display:"none"}}
                      variant="outlined"
                      color="primary"
                      onClick={handleOpen}
                      className={classes.dropPayItem}
                    >
                      الدفع
                    </Button>
                    <button
                      variant="outlined"
                      color="primary"
                      id={prop.id}
                      onClick={(e) => handelPayMentId(e)}
                      className={classes.historyPayBtn}
                    >
                      سجل المدفوعات
                    </button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h6>لا يوجد أبناء مقيدة لديك</h6>
        )}
      </div>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
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
  handleOpen: PropTypes.func,
  getId: PropTypes.func,
  handleOpenMeeting: PropTypes.func,
};
