import React, { useState, useEffect } from "react";
import { getCouponMethode } from "../../action/CouponAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import wallet from "assets/img/payment/wallet.svg";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  flexPromo: {
    display: "flex",
    justifyContent: "space-between",
  },
  promoInput: {
    padding: "7px",
    width: "auto",
    borderRadius: "10px !important",

    background: "#eee",
  },
  payforImg: {
    width: "100%",
    height: "50px",
    margin: "15px auto",
  },
  storNumber: {
    color: "#777",
    fontSize: "20px",
    textAlign: "center",
    padding: "20px 0",
    textShadow: "-1px 1px 1px #aaa",
  },
  storNumber2: {
    color: "#999",
    fontSize: "20px",
    textAlign: "center",
    padding: "20px 0",
    textShadow: "-1px 1px 1px #aaa",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    borderRadius: "20px",
    [theme.breakpoints.down("1g")]: {
      width: "80%",
    },
  },
  massagePair: {
    padding: "10px",
  },
  massageTexst: {
    padding: "10px",
    color: "red",
    fontSize: "11px",
    border: "1px solid #eee",
    margin: "10px 0 0 0",
    borderRadius: "7px",
    boxShadow: "1px 1px 2px #aaa",
  },
}));

const Coupon = ({
  studentId,
  transactionId,
  getCouponMethode,
  couponData: { couponData },
}) => {
  const classes = useStyles();
  const [couponValue, setCouponValue] = useState("");
  const handelCouponChange = (e) => {
    setCouponValue(e.target.value);
  };

  const handelClickCoupon = (e) => {
    e.preventDefault();
    if (couponValue !== "") {
      getCouponMethode(studentId, transactionId, { coupon: couponValue });
      document.getElementById("d-block").style.display = "block"
    }
  };
useEffect(() => {
  getCouponMethode(studentId, transactionId,{coupon:couponValue});
} , [studentId , transactionId])

  return (
    <>
      <Grid
        item
        md={12}
        xs={12}
        style={{ padding: "0 10px", marginBottom: "15px" }}
      >
        <span>???????????? ??????????????: </span>

        <span className={classes.storNumber}>
          {window.localStorage.getItem("valueone") -
            window.localStorage.getItem("valuetwo")}
        </span>
        <span style={{ color: "gray" }}> ??.?? </span>
      </Grid>

      {couponData.data !== undefined && couponData.data.period_discount != 0 ? (
        <Grid
          item
          md={12}
          xs={12}
          style={{ padding: "0 10px", marginBottom: "15px" }}
        >
          <span>?????? ????????????: </span>

          <span className={classes.storNumber2}>
            {couponData.data.period_discount}
          </span>
          <span style={{ color: "gray" }}> ??.?? </span>
        </Grid>
      ) : null}

      {couponData.data !== undefined &&
      couponData.data.coupon_discount &&
      couponData.data.is_coupon_valid ? (
        <Grid
          item
          md={12}
          xs={12}
          style={{ padding: "0 10px", marginBottom: "15px" }}
        >
          <span>?????? ??????????: </span>
          <span className={classes.storNumber2}>
            {couponData.data.coupon_discount}
          </span>
          <span style={{ color: "gray" }}> ??.?? </span>
        </Grid>
      ) : null}

      <Grid item md={12} xs={12}>
        {/* <img src={wallet} alt={wallet} className={classes.payforImg} /> */}
      </Grid>
      <form onSubmit={handelClickCoupon}>

        <Grid
          item
          md={12}
          xs={12}
          style={{ padding: "0 10px" }}
          className={classes.flexPromo}
        >
          <Input
            disabled={
              couponData.data !== undefined && couponData.data.is_coupon_valid
                ? true
                : false
            }
            variant="outlined"
            placeholder="???????? ?????? ??????????"
            className={classes.promoInput}
            onChange={handelCouponChange}
            value={couponValue}
          />
          <Button
            disabled={(couponData.data !== undefined && couponData.data.is_coupon_valid || couponValue == "") ? true : false}
            variant="contained"
            color="primary"
            onClick={handelClickCoupon}
          >
            ??????????
          </Button>
        </Grid>
        <div style={{display:"none"}} id="d-block">

        {couponData.data !== undefined && couponData.data.is_coupon_valid ? (
          <div className={classes.massagePair}>
            <p className={classes.massageTexst} style={{ color: "green" }}>
              {couponData.data && couponData.data.message} {couponValue}
            </p>
          </div>
        ) : couponData.data == undefined ? null : (
          <div className={classes.massagePair}>
            <p className={classes.massageTexst}>
              {couponData.data && couponData.data.message}
            </p>
          </div>
        )}
        </div>

        {couponData.data !== undefined &&
        couponData.data.amount_after_discount &&
        // (
            couponData.data.is_coupon_valid 
        //     ||
        //   couponData.data.period_discount != 0)
           ? (
          <Grid
            item
            md={12}
            xs={12}
            style={{ padding: "0 10px", marginBottom: "15px" }}
          >
            <span>???????????? ?????? ??????????: </span>

            <span className={classes.storNumber2}>
              {couponData.data.amount_after_discount}
            </span>
            <span style={{ color: "gray" }}> ??.?? </span>
          </Grid>
        ) : null}
      </form>
    </>
  );
};

Coupon.propTypes = {
  getCouponMethode: PropTypes.func.isRequired,
  couponData: PropTypes.object,
  date: PropTypes.string,
};

const mapStateToProps = (state) => ({
  couponData: state.couponData,
  date: state.date,
});

export default connect(mapStateToProps, { getCouponMethode })(Coupon);