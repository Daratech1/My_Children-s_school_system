import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const alertMsg = (msgs) => {
  msgs.map((msg) => {
    let x = msg[0];
   // console.log(x);
    return( <span>{x}</span>  );
  });
};

const AlertBox = ({ alerts }) =>
alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert variant="filled" key={alert.id} severity={`${alert.alertType}`}>
      {console.log(alert.msg[0])}
      <AlertTitle>{alert.alertType === "error" ? "خطأ" : ""}</AlertTitle>
      {alertMsg(alert.msg)}{alert.msg}
    </Alert>
  ));

AlertBox.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(AlertBox);
