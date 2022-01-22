import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';


const styles = (theme) => ({
  radioContainer: {
    direction: "rtl",
    width: "100%",
    fontFamily: "cairo",
    marginTop: "10px !important",
  },
  labelText: {
    fontFamily: "cairo",
  },
  formBox: {
    direction: "rtl",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    '& div':{
      borderRadius:"10px"
    }
  },
});
const useStyles = makeStyles(styles);

const PermissionForm = ({ students: { students }, errors, handleChange }) => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [showWho, setShowWho] = useState(true);
  const [showWhy, setShowWhy] = useState(true);
  const [showWhen, setShowWhen] = useState(true);
  const [pickupPersion, setPickupPersion] = useState("");
  const [permissionReson, setPermissionReson] = useState("");
  const [permissionDuration, setPermissionDuration] = useState("");
  
  const checkInputValue = (e) => {
    if (e.target.id === "0") {
      switch (e.target.name) {
        case "pickup_persion":
          setShowWho(false);
          break;
        case "permission_reson":
          setShowWhy(false);
          break;
        case "permission_duration":
          setShowWhen(false);
          break;
        default:
          break;
      }
    } else {
      switch (e.target.name) {
        case "pickup_persion":
          setShowWho(true);
          break;
        case "permission_reson":
          setShowWhy(true);
          break;
        case "permission_duration":
          setShowWhen(true);
          break;
        default:
          break;
      }
    }
    handleChange(e);
  };
  const getPickupPersion = (e) => {
    // setPickupPersion(e.target.value)
    handleChange(e);
  };
  const getPermissionReson = (e) => {
    //setPermissionReson(e.target.value)
    handleChange(e);
  };
  const getPermissionDuration = (e) => {
    //setPermissionDuration(e.target.value)
    handleChange(e);
  };
  return (
    <div className={classes.formBox}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography component="h1" variant="h4" align="center">
            إستئذان طالب
          </Typography>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <div className="form-group">
              <label> الطالب</label>
              <select name="student_id" onChange={(e) => handleChange(e)}>
                <option value="">إختر الطالب</option>
                {students &&
                  students.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.student_name}
                    </option>
                  ))}
              </select>
              {errors.student_id && (
                <small className="error-input">{errors.student_id}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className="form-group custom-input">
              <label>وقت الاستئذان</label>
             <form className={classes.container} noValidate>
                <TextField
                  name="pickup_time"
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2021-12-24T10:30"
                  className={classes.textField}
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              {errors.pickup_time && (
                <small className="error-input">{errors.pickup_time}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl
              component="fieldset"
              className={classes.radioContainer}
            >
              <FormLabel className={classes.labelText} component="legend">
                من سوف يأخد الطالب ؟
              </FormLabel>
              <RadioGroup row name="pickup_persion">
                <FormControlLabel
                  value="ولى الأمر"
                  control={<Radio color="info" />}
                  label="ولى الأمر"
                  onChange={checkInputValue}
                />
                <FormControlLabel
                  value={pickupPersion}
                  control={<Radio id="0" color="info" />}
                  label="غير ذلك"
                  onChange={checkInputValue}
                />
              </RadioGroup>
              <div className="form-group">
                <textarea
                  onChange={(e) => getPickupPersion(e)}
                  hidden={showWho}
                  name="pickup_persion"
                  className="form-control"
                  id=""
                  rows="2"
                  placeholder="وضح السبب"
                ></textarea>
                {errors.pickup_persion && (
                  <small className="error-input">{errors.pickup_persion}</small>
                )}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              component="fieldset"
              className={classes.radioContainer}
            >
              <FormLabel className={classes.labelText} component="legend">
                سبب الإستئذان
              </FormLabel>
              <RadioGroup row name="permission_reson">
                <FormControlLabel
                  id="1"
                  value="موعد مستشفى"
                  control={<Radio color="info" />}
                  label="موعد مستشفى"
                  onChange={checkInputValue}
                />
                <FormControlLabel
                  id="2"
                  value="موعد حكومي"
                  control={<Radio color="info" />}
                  label="موعد حكومى"
                  onChange={checkInputValue}
                />
                <FormControlLabel
                  value={permissionReson}
                  control={<Radio id="0" color="info" />}
                  label="غير ذلك"
                  onChange={checkInputValue}
                />
              </RadioGroup>
              <div className="form-group">
                <textarea
                  onChange={(e) => getPermissionReson(e)}
                  name="permission_reson"
                  hidden={showWhy}
                  className="form-control"
                  id=""
                  rows="2"
                  placeholder="وضح السبب"
                ></textarea>
                {errors.permission_reson && (
                  <small className="error-input">
                    {errors.permission_reson}
                  </small>
                )}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl
              component="fieldset"
              className={classes.radioContainer}
            >
              <FormLabel className={classes.labelText} component="legend">
                مدة الإستئذان
              </FormLabel>
              <RadioGroup row name="permission_duration">
                <FormControlLabel
                  value="يوم دراسي كامل"
                  id="1"
                  control={<Radio color="info" />}
                  label="يوم دراسي كامل"
                  onChange={checkInputValue}
                />
                <FormControlLabel
                  value={permissionDuration}
                  control={<Radio id="0" color="info" />}
                  label="غير ذلك"
                  onChange={checkInputValue}
                />
              </RadioGroup>
              <div className="form-group">
                <textarea
                  onChange={(e) => getPermissionDuration(e)}
                  name="permission_duration"
                  hidden={showWhen}
                  className="form-control"
                  id=""
                  rows="2"
                  placeholder="وضح السبب"
                ></textarea>
                {errors.permission_duration && (
                  <small className="error-input">
                    {errors.permission_duration}
                  </small>
                )}
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
PermissionForm.propTypes = {
  students: PropTypes.object,
};

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, {})(PermissionForm);
