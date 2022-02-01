import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import RegularButton from "components/CustomButtons/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import FormControlLabel from "@mui/material/FormControlLabel";

import { makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import InputLabel from "@material-ui/core/InputLabel";

import moment from "moment";
import "moment/locale/ar";
import { fill } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
  },
  label: {
    color: "#322165",
  },
  pair_Moving: {
    padding: "10px",
    background: "rgb(243 243 243 / 80%)",
    boxShadow: "0px 5px 4px #aaa, 0px 0px 2px #aaa",
  },
  pair_selectbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  removeBefore: {
    border: "1px solid #bbb",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px #999",
    "&:before": {
      display: "none",
    },
  },
}));

const PricingTable = ({
  plans,
  sendPlanInfo,
  transportations,
  appId,
  handleShow,
  applications,
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);
  const [transportation, setTransportation] = useState(false);
  const [transId, setTransId] = useState(0);
  const [transWay, setTransWay] = useState(0);
  const [transWayValue, setTransWayValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChoose = (id) => {
    setValue(id);
  };
  const GreenCheckbox = withStyles({
    root: {
      color: "#312163",
      "&$checked": {
        color: "#00ddb1",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleTransRequired = (e) => {
    setTransportation(e.target.checked);
  };
  const handleSelectTransType = () => {
    return (
      transportations &&
      transportations.map((item) => (
        <option key={item.id} value={item.id}>
          {item.transportation_type}
        </option>
      ))
    );
  };
  const handleTransType = (e) => {
    setTransId(e.target.value);
  };
  const handleTransWay = (e) => {
    setTransWayValue(e.target.value);
    switch (e.target.value) {
      case "1":
        setTransWay("annual_fees");
        break;
      case "2":
        setTransWay("semester_fees");
        break;
      case "3":
        setTransWay("monthly_fees");
        break;
      default:
        break;
    }
  };
  const handleTransPay = () => {
    const item = transportations.find((o) => o.id == transId);

    if (transId == 0) {
      return null;
    } else {
      return item[transWay];
    }
  };
  const checkStatusApp = () => {
    const result = applications.find((o) => o.id == appId).status_id;
    if (result > 3) {
      return (
        <RegularButton variant="contained" color="primary" disabled>
          غير متاح في هذه المرحلة
        </RegularButton>
      );
    } else {
      return (
        <RegularButton
          variant="contained"
          color="primary"
          onClick={() => sendPlan()}
        >
          تحويل
        </RegularButton>
      );
    }
  };
  const sendPlan = () => {
    let final;
    if (transportation) {
      final = {
        plan_id: value,
        transportation_required: transportation ? 1 : 0,
        transportation_id: transId,
        transportation_payment: transWayValue,
      };
    } else {
      final = {
        plan_id: value,
        transportation_required: transportation ? 1 : 0,
      };
    }
    sendPlanInfo(appId, final);
    handleShow();
  };
  return (
    <div className="pricing-table">
      <h2>اختر خطة الدفع</h2>
      <div className="pricing-items">
        {plans.length > 0 ? (
          plans.map((prop) => (
            <div
              className={`${prop.id == value ? "item active" : "item"}`}
              key={prop.id}
              onClick={() => handleChoose(prop.id)}
            >
              {prop.is_discounted && (
                <div className="discount">
                  <span className="number">{prop.discount_rate}%</span> خصم
                </div>
              )}
              <h4 className="title-item">{prop.plan_name} </h4>
              <ul>
                <li>
                  <span className="name">القيمة:</span>
                  <span className="value"> {prop.ammount_before_discount}</span>
                </li>
                <li>
                  <span className="name"> عدد الاقساط:</span>
                  <span className="value"> {prop.installments}</span>
                </li>
                {prop.is_discounted && (
                  <>
                    <li>
                      <span className="name">القيمة بعد الخصم:</span>
                      <span className="value">
                        {" "}
                        {prop.ammount_after_discount}
                      </span>
                    </li>

                    <li>
                      <span className="name"> صالح حتى:</span>
                      <span className="value">
                        {" "}
                        {moment(prop.Valid_until)
                          .locale("ar")
                          .format("dddd_ ll ")}
                      </span>
                    </li>
                  </>
                )}
              </ul>
              <hr />
              <div className="money-dis">
                <span>{prop.is_discounted ? prop.discount_ammount : 0}</span>{" "}
                وفر / رس
              </div>{" "}
              <div className="select-plan">
                <GreenCheckbox
                  checked={prop.id == value}
                  value={prop.id}
                  onChange={handleChange}
                  name="checkedG"
                />
              </div>
            </div>
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>

      <Grid container spacing={1} style={{ alignItems: "flex-end" }}>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={transportation}
                onChange={(e) => handleTransRequired(e)}
                name="transportation_required"
                sx={{
                  color: "#2A2666",
                  "&.Mui-checked": {
                    color: "#2A2666",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                }}
              />
            }
            label="الإشتراك  فى خدمة النقل"
          />
        </Grid>
        {transportation && (
          <>
            <Grid item xs={4} sm={4}>
              <div className="form-group">
                <label className={classes.label}>خدمة النقل</label>
                <select
                  name="transportation_id"
                  onChange={(e) => handleTransType(e)}
                  value={transId}
                >
                  <option value="0" disabled>
                    إختر الخدمة
                  </option>
                  {handleSelectTransType()}
                </select>
              </div>
            </Grid>
            <Grid item xs={4} sm={4}>
              <div className="form-group">
                <label className={classes.label}>طريقة السداد </label>
                <select
                  name="transportation_payment"
                  onChange={(e) => handleTransWay(e)}
                  value={transWay}
                >
                  <option value="0" disabled>
                    إختر الطريقة
                  </option>
                  <option value="1">سنوي</option>
                  <option value="2">فصلى</option>
                  <option value="3">شهري</option>
                </select>
              </div>
            </Grid>
            {transWay !== 0 ? (
              <Grid item xs={4} sm={4}>
                <Typography
                  component="h6"
                  variant="h6"
                  align="right"
                  style={{ lineHeight: "2.6" }}
                >
                  تكلفة الخدمة: {transWay && handleTransPay()}
                </Typography>
              </Grid>
            ) : (
              <></>
            )}
          </>
        )}
      </Grid>

      <div className="plan-action">{checkStatusApp()}</div>
    </div>
  );
};
PricingTable.propTypes = {
  plans: PropTypes.array,
};

export default PricingTable;
