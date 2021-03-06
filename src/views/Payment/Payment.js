import React, { useState, useEffect } from "react";
// import eway from "assets/img/payment/eway.png";
// import paypal from "assets/img/payment/paypal.png";
// import mada from "assets/img/payment/mada.png";
// import applepay from "assets/img/payment/applepay.png";
// import visa from "assets/img/payment/visa.png";
import payfort from "assets/img/payment/payfort.png";
// import maestro from "assets/img/payment/maestro.png";
// import googlepay from "assets/img/payment/google-pay.png";
import bankImg from "assets/img/payment/bank.png";
import school from "assets/img/payment/school.png";
// import stc from "assets/img/payment/stc.png";
import noData from "assets/img/payment/undraw_no_data_re_kwbl.svg";
import wallet from "assets/img/payment/wallet.svg";
import undrowschool from "assets/img/payment/undrow_school.svg";
// import saudi_logo from "assets/img/payment/saudi_logo.svg";
// import egypt_logo from "assets/img/payment/egypt_logo.svg";
// import palsteen_logo from "assets/img/payment/palsteen_logo.svg";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';


import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SendIcon from "@material-ui/icons/Send";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTransactoinMethode } from "../../action/transactionPay";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useLocation } from "react-router-dom";
import Coupon from "./Coupone"
// ======================================================

// start check radio
const GreenRadio = withStyles({
  root: {
    color: "#a489f4",
    "&$checked": {
      color: purple[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
// end check radio

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formCo: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textRight: {
    right: "15px",
    left: "inherit",
  },
  textCenter: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  flexPromo:{
    display:"flex",
    justifyContent:"space-between"
  },
  promoInput:{
    padding:"7px",
    width:"auto",
    borderRadius:"10px !important",
    borderTopLeftRadius: '0 !important',
    borderBottomLeftRadius:' 0 !important',
    background:"#eee"
  }
  ,
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root2: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  custom_border: {
    position: "relative",
    border: "1px solid #ddd",
    marginTop: window.screen.availWidth < 780 ? "60px" : "20px",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  form_padding: {
    padding: "10px 20px",
  },
  custom_img: {
    position: "absolute",
    top: "-45px",
  },
  checkboxStyle: {
    position: "absolute",
    top: "55px",
    left: " 50%",
    transform: "translateX(-50%)",
  },
  justifyContent: {
    justifyContent: "flex-end",
    paddingRight: "30px",
    paddingLeft: "10px",
  },
  pairBookBtn: {
    display: "flex",
    justifyContent: "center",
  },
  bookBtn: {
    background: "#3f2885",
    color: "#fff",
    padding: "7px",
    width: "150px",
    fontSize: "17px",
    borderRadius: "40px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border:"0"
  },
  payforImg: {
    width: "100%",
    height:"100px",
    margin: "15px auto",
  },
  storNumber:{
    color: "#8e24aa",
    fontSize: '20px',
    textAlign: "center",
    padding: "20px 0",
    textShadow: "-1px 1px 1px #aaa",
  },
  storNumber2:{
    color: "#20c18d",
    fontSize: '20px',
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
}));

const Payment = ({
  getTransactoinMethode,
  transactionData: { transactionData },
}) => {
  let location = useLocation();

  const [items1] = useState([
    {
      id: 1,
      src: payfort,
      alt: payfort,
      status: 1,
      chackval: "a",
      CheckVal: "A",
    },
    // {
    //   id: 2,
    //   src: applepay,
    //   alt: applepay,
    //   status: 0,
    //   chackval: "b",
    //   CheckVal: "B",
    // },
    // {
    //   id: 3,
    //   src: googlepay,
    //   alt: googlepay,
    //   status: 0,
    //   chackval: "c",
    //   CheckVal: "C",
    // },
    // { id: 4, src: mada, alt: mada, status: 0, chackval: "d", CheckVal: "D" },
    // { id: 5, src: stc, alt: stc, status: 0, chackval: "e", CheckVal: "E" },
  ]);
  const [items2] = useState([
    // { id: 1, src: maestro, alt: eway, status: 0, chackval: "f", CheckVal: "F" },
    // { id: 2, src: visa, alt: paypal, status: 0, chackval: "g", CheckVal: "G" },
  ]);
  const [items3] = useState([
    {
      id: 1,
      src: bankImg,
      alt: bankImg,
      tooltips: "?????????? ????????",
      status: 3,
      chackval: "h",
      CheckVal: "H",
    },
    {
      id: 2,
      src: school,
      alt: school,
      tooltips: "?????? ???? ???????? ?????????????? ",
      status: 2,
      chackval: "k",
      CheckVal: "K",
    },
  ]);

  const [bankArr] = useState([
    {
      id: 1,
      name: "?????????? ???????????? ",
    },
    {
      id: 2,
      name: "?????????? ????????????",
    },
    {
      id: 3,
      name: "?????? ???????????????? ",
    },
    {
      id: 4,
      name: "?????????? ???????????? ",
    },
  ]);

  const classes = useStyles();
  const [age, setAge] = useState(10);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [state, setState] = useState({
    checkedB: false,
  });

  const [checkForForm, setCheckForForm] = useState("1");

  const handleChangechec = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handelClik = (e) => {
    setCheckForForm(e.target.attributes.status.value);
  };

  const [selectedValue, setSelectedValue] = useState("a");

  const handleChangecheck = (event) => {
    setSelectedValue(event.target.value);
  };
  // statrt posting data *************************************************
  const [methodId, setMethodId] = useState(0);
  const [uploadVal, setUploadVal] = useState(null);
  const [transactionPostData, setTransactionPostData] = useState(null);
  // statrt posting data **************************************************

  // start select box for bank payment method
  const [bank, setBank] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangebank = (event) => {
    setBank(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // *********************************
  const handelUploadChange = (e) => {
    setUploadVal(e.target.files[0]);
    setMethodId(e.target.id);
    
  };
  // *********************************
  var formData = new FormData();
  const handelMethodIdClick = (e) => {
    formData.append("receipt", uploadVal);
    formData.append("bank_id", methodId);
    formData.append("method_id", methodId);
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      formData
    );

    

  };

  const handelMethodIdClickSchool = (e) => {
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      { method_id: 2 }
    );
  };

  const handelMethodIdClickpayfort = (e) => {
    
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      { method_id: 3 }
    ) 
  };

  useEffect(() => {
    getTransactoinMethode(
      location.state.studentId,
      location.state.transactionId,
      { method_id: 3 }
    );
  }, [getTransactoinMethode]);

  // *********************************

const [open2, setOpen2] = React.useState(true);

const handleClosePopUp = () => {
  setOpen2(false);
  window.location.href = window.location.href;
};
  return (
    <div>
      <div>
        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={transactionData && transactionData.success === true && open2}
          onClose={handleClosePopUp}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          
          <Fade in={transactionData.success && transactionData.success === true &&  open2}>
            <div className={classes.paper}>
              <p
                id="transition-modal-description"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                {transactionData.success && transactionData.success === true ? 
                <CheckCircleOutlineIcon
                style={{ color: "green", width: "2em", height: "2em" }}
              />
                :
                 
                <HighlightOffIcon 
                style={{ color: "red", width: "2em", height: "2em" }}
                /> 
                }
                {" "}
                {transactionData.success && transactionData.success === true  
                  ? transactionData.messages
                  : "?????? ?????? ???? ???????? ????????????????"
                  }{" "}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
      <div className="form ">
        <div className="contennt">
          <h4 className={classes.textCenter}>
            ?????? ?????????? <AttachMoneyIcon />{" "}
          </h4>
          <div style={{width:"50%", margin:"auto",border:"1px solid #ddd",padding:"10px" , borderRadius:"10px"}}>
            <Coupon studentId={location.state.studentId} transactionId={location.state.transactionId} />
          </div>
         
          {/* start icons part */}
          <Grid xs={12} className={classes.form_padding}>
            <div className="flexing_items">
              <Grid xs={12} md={8}>
                <div className="payment_methods col-md-6">
                  <div className="part_1">
                    <h4> ?????????? ?????????? ?????????????????????? *</h4>
                    <div className="part_1_content">
                      {items1.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <img
                                  onClick={handelClik}
                                  src={ele.src}
                                  alt={ele.alt}
                                  width="100%"
                                  status={ele.status}
                                />
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="part_1">
                    <h4> </h4>
                    <div className="part_1_content">
                      {items2.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <img
                                  onClick={handelClik}
                                  src={ele.src}
                                  alt={ele.alt}
                                  width="100%"
                                  status={ele.status}
                                />
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="part_1">
                    <h4> ?????????? ???????? *</h4>
                    <div className="part_1_content">
                      {items3.map((ele, i) => {
                        return (
                          <div key={i}>
                            <FormControlLabel
                              control={
                                <GreenRadio
                                  checked={selectedValue === ele.chackval}
                                  onChange={handleChangecheck}
                                  value={ele.chackval}
                                  color="default"
                                  name="radio-button-demo"
                                  inputProps={{ "aria-label": ele.CheckVal }}
                                  className={classes.checkboxStyle}
                                />
                              }
                              label={
                                <Tooltip
                                  title={ele.tooltips}
                                  aria-label={ele.tooltips}
                                >
                                  <img
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title={ele.tooltip}
                                    onClick={handelClik}
                                    src={ele.src}
                                    alt={ele.alt}
                                    width="100%"
                                    status={ele.status}
                                  />
                                </Tooltip>
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Grid>

              {/* start form part */}
              {checkForForm == "1" ? (
                <Grid
                  container
                  xs={12}
                  md={4}
                  spacing={2}
                  className={classes.custom_border}
                >
                  {
                    <form
                      action={transactionData.url && transactionData.url}
                      onSubmit={handelMethodIdClickpayfort}
                      method="post"
                    >
                      {transactionData.params &&
                        Object.values(transactionData.params).map((ele, i) => {
                          return (
                            <input
                            key={i}
                              type="hidden"
                              value={transactionData.params && ele}
                              name={
                                transactionData.params &&
                                Object.keys(transactionData.params)[i]
                              }
                            />
                          );
                        })}

                        {/* <Coupon studentId={location.state.studentId} transactionId={location.state.transactionId} /> */}

                      <Grid item md={12} xs={12}>
                      <img src={wallet} alt={wallet} className={classes.payforImg} />
                        <div className={classes.pairBookBtn}>
                          <button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.bookBtn}
                          >
                            ???????? ????????
                            <SendIcon />
                          </button>
                        </div>
                      </Grid>
                    </form>
                  }

                  {/* <Grid md={12} xs={12}>
                    <div className={classes.root2}>
                      <Button
                      onClick={handelMethodIdClickpayfort}
                        variant="contained"
                        color="primary"
                        className="pay_btn"
                      >
                        ??????
                        <SendIcon />
                      </Button>
                    </div>
                  </Grid> */}
                </Grid>
              ) : checkForForm === "3" ? (
                <Grid
                  container
                  xs={12}
                  md={4}
                  spacing={2}
                  className={classes.custom_border}
                >
                  {/* <img
                    src={wallet}
                    alt={wallet}
                    width={150}
                    height={70}
                    className={classes.custom_img}
                  /> */}

                  <Grid item md={12} xs={12}>
                    
                    {/* <FormControl style={{ width: "100%" }}>
                      <InputLabel
                        className={classes.textRight}
                        id="demo-controlled-open-select-label"
                      >
                        ?????? ??????????
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={bank}
                        label="Age"
                        onChange={handleChangebank}
                      >
                        <MenuItem value="" className={classes.justifyContent}>
                          <em> * ???????? ??????????</em>
                        </MenuItem>
                        {bankArr.map((ele) => {
                          return (
                            <MenuItem
                              id={ele.id}
                              key={ele.id}
                              className={classes.justifyContent}
                              value={ele.id}
                            >
                              {ele.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl> */}
                    {/* <Coupon studentId={location.state.studentId} transactionId={location.state.transactionId} /> */}
                  </Grid>

                  <Grid item md={12} xs={12} className="bank_title_text">
                    <span>
                      ?????????? ?????????? ???????????? ?????????????? ?????? ?????? ???????????? ????????????
                    </span>
                    <div className="bank_name_box">
                      <p>
                        {" "}
                        <span>?????? ????????????</span> : <span>???????? ??????????</span>{" "}
                      </p>
                      <p>
                        {" "}
                        <span>?????? ????????????</span> : <span>1122334455</span>{" "}
                      </p>
                    </div>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <p>?????????? ?????????? ???????? ?????? ??????????????</p>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                    >
                      <form enctype="multipart/form-data">
                        <input
                          hidden
                          id={1}
                          type="file"
                          onChange={handelUploadChange}
                        />
                      </form>
                      ???????????? ????????
                    </Button>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <div className={classes.pairBookBtn}>
                      <button
                        variant="contained"
                        color="primary"
                        className={classes.bookBtn}
                        onClick={handelMethodIdClick}
                      >
                        ?????????? ??????????????
                        <SendIcon />
                      </button>
                    </div>
                  </Grid>
                </Grid>
              ) : checkForForm === "2" ? (
                <>
                  <Grid
                    xs={12}
                    md={6}
                    spacing={2}
                    className={classes.custom_border}
                  >
                    <Grid container>
                    {/* <Coupon studentId={location.state.studentId} transactionId={location.state.transactionId} /> */}

                      <h5 style={{ padding: " 0 10px" }}>
                        {" "}
                        ?????????? ???????????? ?????? ?????????????? ???????? ????????????????.
                      </h5>
                      <img
                        src={undrowschool}
                        alt={undrowschool}
                        width={200}
                        height={200}
                      />
                    </Grid>
                    <div className={classes.pairBookBtn}>
                      <button
                        className={classes.bookBtn}
                        onClick={handelMethodIdClickSchool}
                      >
                        ???????? ????????
                      </button>
                    </div>
                  </Grid>
                </>
              ) : (
                <Grid
                  container
                  xs={12}
                  md={6}
                  spacing={2}
                  className={classes.custom_border}
                >
                  <h5 style={{ padding: " 0 10px" }}>
                    {" "}
                    ???????? ?????????? ?????????? ?????? ???????????? ????????{" "}
                  </h5>
                  <img src={noData} alt={noData} width={200} height={200} />
                </Grid>
              )}
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {
  getTransactoinMethode: PropTypes.func.isRequired,
  transactionData: PropTypes.object,
  date: PropTypes.string,
};

const mapStateToProps = (state) => ({
  transactionData: state.transactionData,
  date: state.date,
});

export default connect(mapStateToProps, { getTransactoinMethode })(Payment);