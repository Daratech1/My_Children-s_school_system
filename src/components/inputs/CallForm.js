import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
// import DatePicker from "@deskpro/react-datepicker-hijri";
// import moment from "moment-hijri";
// import TextField from '@mui/material/TextField';


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

const CallForm = ({ students: { students }, errors, handleChange }) => {
  const classes = useStyles();
 
  
 
  return (
    <div className={classes.formBox}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography component="h1" variant="h4" align="center">
            نداء طالب
          </Typography>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
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
        </Grid>
      </Grid>
    </div>
  );
};
CallForm.propTypes = {
  students: PropTypes.object,
};

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, {})(CallForm);
