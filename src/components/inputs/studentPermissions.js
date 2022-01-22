import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
const emails = ["username@gmail.com", "user02@gmail.com"];

const styles = {
  containerPaper: {
    padding: "2.5rem 2rem",
    borderRadius: "15px",
  },
  btn: {
    marginRight: "1rem",
    padding: ".1rem 1.8rem",
    borderRadius: "7px",
    fontSize: "1.2rem",
  },
  labelSmall: {
    fontSize: ".6rem",
    fontWeight: 500,
    color: "black",
  },
  label: {
    fontSize: ".7rem",
    fontWeight: 800,
    color: "black",
  },
};

const useStyles = makeStyles(styles);

function SimpleDialog(props) {
  const classes = useStyles();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{
        style: {
          borderRadius: "20px",
          padding: "1rem 2rem",
          backgroundColor: "#fbfbfb",
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
        </Typography>
        <Grid container spacing={3} >
          <Grid item sm={5}>
            <Box pb={3} dir="rtl">
              <label className={classes.label}>من سوف يأخذ الطالب </label>
              <Box dir="rtl">
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" style={{ color: "#62e8ce" }}>
                    ولى الأمر
                  </Typography>
                  <Checkbox
                    defaultChecked
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    color="default"
                    size="small"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <Typography variant="body1" style={{ color: "#62e8ce" }}>
                    غير ذلك
                  </Typography>
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    color="default"
                    size="small"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
                <div
                  className="form-group-small"
                  style={{ marginTop: "-.5rem" }}
                >
                  <label className={classes.labelSmall}>ذكر من سيأخذه</label>
                  <input
                    type="text"
                    name="student_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ width: "5rem" }}
                  />
                </div>
              </Box>
            </Box>
            <Box dir="rtl">
              <label className={classes.label}>مده الاستئذان</label>
            </Box>
            <Box dir="rtl" style={{ margin: "0 !important" }}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" style={{ color: "#72e6cf" }}>
                  اليوم الدراسي
                </Typography>
                <Checkbox
                  defaultChecked
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography variant="body1" style={{ color: "#72e6cf" }}>
                  غير ذلك
                </Typography>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Box>
              <div className="form-group-small">
                <label className={classes.labelSmall}>تحديد وقت معين</label>
                <input
                  type="text"
                  name="student_name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{ width: "5rem", marginTop: "- 5rem" }}
                />
              </div>
            </Box>
            <Box display="flex" mt={10} dir="rtl">
              <Button variant="outlined" className={classes.btn}>
                ألغاء
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.btn}
              >
                التالي
              </Button>
            </Box>
          </Grid>

          <Grid item sm={7}>
            <div className="form-group-small">
              <label className={classes.label}>اسم الطالب</label>
              <input
                type="text"
                name="student_name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "10rem" }}
                className="form-control-small"
              />
            </div>{" "}
            <div className="form-group-small" style={{ marginTop: "1rem" }}>
              <label className={classes.label}></label>
              <input
                type="text"
                name="student_name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "10rem" }}
                className="form-control"
              />
            </div>{" "}
            <Box dir="rtl">
              <label className={classes.label}>سبب الاستئذان</label>
            </Box>
            <Box dir="rtl">
              <Box display="flex" alignItems="center">
                <Typography variant="body2" style={{ color: "#72e6cf" }}>
                  موعد مستشفي
                </Typography>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                  color="default"
                  size="small"
                  defaultChecked
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography variant="body1" style={{ color: "#62e8ce" }}>
                  موعد حكومي
                </Typography>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography variant="body1" style={{ color: "#62e8ce" }}>
                  غير ذلك
                </Typography>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                  color="default"
                  size="small"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Box>
              <div className="form-group-small">
                <label className={classes.labelSmall}>ذكرالسبب</label>
                <input
                  type="text"
                  name="student_name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{ width: "5rem" }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        student Permission
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
