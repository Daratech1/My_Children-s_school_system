import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@mui/icons-material/Info";
import StudentTableAbsence from "components/StudentTable/StudentTableAbsence";
import { getPermissionAndAbsence } from "action/Permissions";

import CalendarHeatmap from "components/Chart/AbsenceChart"


const styles = (theme) => ({
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButton: {
    direction: "ltr",
    float: "left",
    background: "#322165 !important",
    color: "#fff",
    fontSize: "20px",
    borderRadius: "15px",
    fontWeight: "bold",
    fontFamily: "Cairo, sans-serif",
    margin: "5px",
    "& svg": {
      color: "#00DDB1",
      width: "30px",
      height: "30px",
      "&,&:focus,&:hover,&:visited": {
        background: "transparent",
      },
    },
  },
});



const useStyles = makeStyles(styles);

const AbsenceChart = ({
  getPermissionAndAbsence,
  absence: { StudentPermissions, StudentAbsent },
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    getPermissionAndAbsence();
  }, []);

  const superSecret = () => {
    const newArrayPermission = StudentPermissions && StudentPermissions.map(
      ({ pickup_time: date, permission_reson: reason, ...rest }) => ({
        date,
        reason,
        status: "إستئذان",
        color: "primary",
        count: 2,
        ...rest,
      })
    );
    const newArrayAbsence = StudentAbsent && StudentAbsent.map(
      ({ absent_date: date, reason: reason, ...rest }) => ({
        date,
        reason,
        status: "غائب",
        color: "info",
        count: 1 ,
        ...rest,
      })
    );
   const mainArry = _.concat(newArrayAbsence,newArrayPermission);
   return mainArry
  };

  return (
    <div className="chart-box">
      <div className={classes.headerBox}>
        <h2>
          جدول حضور الطالب
        </h2>
        <Button
          variant="contained"
          className={classes.addButton}
          startIcon={<InfoIcon />}
          onClick={handleOpen}
        >
          تفاصيل
        </Button>
      </div>
      {open && <StudentTableAbsence data= {StudentPermissions && superSecret()}/>}
      {!open &&  StudentPermissions && <CalendarHeatmap values={ superSecret()} />}
    </div>
  );
};

AbsenceChart.propTypes = {
  getPermissionAndAbsence: PropTypes.func,
  absence: PropTypes.object,
};
const mapStateToProps = (state) => ({
  absence: state.permissions.absence,
});
export default connect(mapStateToProps, { getPermissionAndAbsence })(
  AbsenceChart
);
