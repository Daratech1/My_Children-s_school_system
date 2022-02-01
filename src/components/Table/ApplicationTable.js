import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@mui/material/Button";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import RequestDetails from "views/RequestDetails/RequestDetails";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function AppTable(props) {
  const classes = useStyles();
  const [orderDetails, setOrderDetails] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { tableHead, tableData, handleOpen, getId, handleOpenMeeting } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getId(event.currentTarget.id);
  };
  const [filterobj, setFilterobj] = useState({});

  
  const handleClose = () => {
    setAnchorEl(null);
    handleOpenMeeting();
  };
  const test = () => {
    setOrderDetails(!orderDetails);
  };

  const filerdObject = (id) => {
    const filteredEle = tableData.filter((ele) => ele.id === id);
    setFilterobj(filteredEle[0]);
  };

  const bodyData = tableData.map((prop, i) => {
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
        <td>{prop.type_name}</td>
        <td>{prop.gender_name}</td>
        <td>{prop.grade_name}</td>
        <td>{prop.level_name}</td>
        <td>{prop.status_name}</td>
        <td>
          {prop.status != null ? (
            <Button variant="contained" size="large" color="error">
              تحديد موعد المقابلة
            </Button>
          ) : (
            <></>
          )}

          <IconButton
            id={prop.id}
            aria-label="settings"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon onClick={() => filerdObject(prop.id)} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => handleOpen()}
              className={classes.dropPayItem}
            >
              الدفع
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.dropPayItem}>
              سجل المدفوعات
            </MenuItem>
            <MenuItem
              // name={prop.id}
              onClick={() => {
                test();
              }}
              className={classes.dropPayItem}
            >
              بيانات الطلب
            </MenuItem>
          </Menu>
        </td>
      </tr>
    );
  });

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
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody className={classes.tableBody}>{bodyData}</TableBody>
        </Table>

        <div className={classes.pairCard}>
          {tableData.length > 0 ? (
            tableData.map((prop) => {
              return (
                <Grid xs={12} sm={6} md={6} item className={classes.addPadding} key={prop.id}>
                  <Card className={classes.cardMargin}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                          الأسم:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.student_name}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          هوية الطالب:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.national_id}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          النظام:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.type_name}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          النوع:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.gender_name}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          المرحلة:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.grade_name}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          الصف:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.level_name}
                            </Typography>{" "}
                          </span>
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                          الحاله:{" "}
                          <span>
                            {" "}
                            <Typography
                              variant="body2"
                              style={{
                                color: "rgb(49 33 99)",
                                fontSize: "16px",
                              }}
                              component="span"
                            >
                              {prop.status_name}
                            </Typography>{" "}
                          </span>
                        </Typography>
                        {prop.status != null ? (
                          <Typography gutterBottom variant="h6" component="h2">
                            <Button
                              variant="contained"
                              size="large"
                              color="error"
                            >
                              تحديد موعد المقابلة
                            </Button>
                          </Typography>
                        ) : null}
                      </CardContent>
                    </CardActionArea>

                    <CardActions className={classes.spaceAround}>
                      <IconButton
                        id={prop.id}
                        aria-label="settings"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{ border: "1px solid #aaa" }}
                      >
                        <MoreVertIcon onClick={() => filerdObject(prop.id)} />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={() => handleOpen()}
                          className={classes.dropPayItem}
                        >
                          الدفع
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          className={classes.dropPayItem}
                        >
                          سجل المدفوعات
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            test();
                          }}
                          className={classes.dropPayItem}
                        >
                          بيانات الطلب
                        </MenuItem>
                      </Menu>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <h6>لا يوجد أبناء في قائمه الانتظار</h6>
          )}
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={orderDetails}
        onClose={test}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={orderDetails}>
          <div className={classes.modalOrderDetails}>
            <RequestDetails tableData={props.tableData} filterobj={filterobj} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

AppTable.defaultProps = {
  tableHeaderColor: "gray",
};

AppTable.propTypes = {
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
