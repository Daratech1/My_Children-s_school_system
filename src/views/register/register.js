import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import ar from "localization/ar.json";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GoogleIcon from "assets/img/social-icons/google.png";
import FacebookIcon from "assets/img/social-icons/facebook.png";
import TwiterIcon from "assets/img/social-icons/twiter.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import FormHelperText from "@material-ui/core/FormHelperText";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import BgLogin from "../../assets/img/icons/logo.png";
import { margin } from "@mui/system";
import { register } from "action/auth";

import "./style.css"
const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: " 1rem 1rem",
    },
  },
  containerInput: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 ",
    },
  },
  margin: {
    marginTop: "5rem",
  },
  containerImg: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      height: "auto",
    },
  },
  hides:{
    [theme.breakpoints.down("md")]: {
      marginTop:"70px",
    },
  },
  smallLogo: {
    height: "10rem",
    width: "10rem",
    backgroundSize: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: "0 1.5rem",
  },
  imgKids: {
    width: "100%",
  },
  title: {
    fontSize: ".7rem !important",
    fontFamily: "cairo",
    position: "relative",
    padding: "5px",
    "&:before": {
      content: "",
      height: "2px",
      width: "50px",
      borderTop: "1px solid red",
      position: "absolute",
      left: "0",
      top: "0",
    },
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontsize: ".1rem",
    },
  },
  registerText: {
    fontFamily: "cairo",
  },
  shoPass: {
    position: "absolute",
    left: "0",
    bottom: "-1px",
  },
  logIn: {
    width: "60%",
    margin: "20px auto",
    fontFamily: "cairo",
    background: "#322165",
  },
  imgBox: {
    width: "100%",
    height: "100vh",
    background: "#fff",
    textAlign: "center",
    "& img": {
      width: "100%",
      height: "800px",
      objectFit: "contain",
    },
  },
  registLink: {
    textAlign: "center",
    marginTop: "30px",
    cursor: "pointer",
    color: "#3c4858",
    fontFamily: "cairo",
    fontSize: "18px",
    fontWeight: "bold",
  },
  helpText: {
    textAlign: "right",
    paddingRight: "5px",
    color: "red",
  },
}));
const Register = ({ data: { nationalities, countries_id }, register }) => {
  let history = useHistory();
  const [showPassword,setShowPassword] = React.useState(false);
  const [passwordConfig,setPasswordConfig] = React.useState('');
  const [confirmPass,setConfirmPass] = React.useState(false);
  const [disableBtn,setDisableBtn] = React.useState(true);
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    nationality_id: "",
    country_id: "",
    phone: "",
    email: "",
    password: "",
  });

  const {
    first_name,
    last_name,
    email,
    country_id,
    nationality_id,
    phone,
    password,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!confirmPass) {
      register(formData);
    }
  };
  const onChangePhone = (e) => {
     setFormData({...formData,"phone": formatPhoneNumber(e).replace(/\s/g, "")})
  };
  const checkPassword = (e)=>{
    setPasswordConfig(e.target.value)
    if (e.target.value !== password) {
      setConfirmPass(true)
      setDisableBtn(true)
    }else{
      setConfirmPass(false)
      setDisableBtn(false)
    }
  };
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const handleSelectNationality = () => {
    return (
      nationalities &&
      Object.keys(nationalities).map((keyName, i) => (
        <option key={i} value={keyName}>
          {nationalities[keyName]}
        </option>
      ))
    );
  };
  const handleSelectCountries = () => {
    return (
      countries_id &&
      Object.keys(countries_id).map((keyName, i) => (
        <option key={i} value={keyName}>
          {countries_id[keyName]}
        </option>
      ))
    );
  };
  return (
    <Grid container style={{ alignItems: "center" }} className="handelDir">
      <Grid item xs={12} md={6} className={classes.container}  className="handel_pos"> 
        <Typography align="center" variant="h4" style={{ margin: "2rem 0 " }}>
          تسجيل ولي أمر جديد
        </Typography>
        <div className={classes.containerInput}>
          <div className="row-box">
            <div className="form-group">
              <label>الاسم الاول </label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="الاسم الاول"
              />
            </div>
            <div className="form-group">
              <label>الاسم الاخير </label>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="الاسم الاخير"
              />
            </div>
          </div>
          <div className="row-box">
            <div className="form-group">
              <label> الجنسية </label>
              <select
                name="nationality_id"
                value={nationality_id}
                onChange={(e) => onChange(e)}
              >
                <option value="">إختر الجنسية</option>
                {handleSelectNationality()}
              </select>
            </div>
            <div className="form-group">
              <label> دولة الإقامة </label>
              <select
                name="country_id"
                value={country_id}
                onChange={(e) => onChange(e)}
              >
                <option value="">إختر دولة الإقامة</option>
                {handleSelectCountries()}
              </select>
            </div>
          </div>
          <div className="row-box">
            <div className="form-group">
              <label>البريد الإلكترونى </label>
              <input
                type="mail"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="البريد الالكترونى"
              />
            </div>
            <div className="form-group">
              <label>رقم الجوال </label>
              <PhoneInput
                defaultCountry="SA"
                labels={ar}
                onChange={(e) => onChangePhone(e)}
              />
            </div>
          </div>

          <div className="row-box">
            <div className="form-group">
              <Button className={classes.shoPass} onClick={handleShowPass}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
              <label>كلمه المرور </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="كلمه المرور"
              />
            </div>
            <div className="form-group">
              <Button className={classes.shoPass} onClick={handleShowPass}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
              <label>تاكيد كلمة المرور </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password_confirmation"
                value={passwordConfig}
                onChange={(e) => checkPassword(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="تاكيد كلمة المرور"
              />
              {confirmPass && (
                <FormHelperText
                  id="component-helper-text"
                  className={classes.helpText}
                >
                  كلمة المرور غير متطابقة
                </FormHelperText>
              )}
            </div>
          </div>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Link
              href="#"
              title="كلمة المرور سوف ترسل الى رقم الجوال المسجل لدينا"
            >
              نسيت كلمه المرور
            </Link>

            <Box display="flex" alignItems="center">
              <Typography variant="caption">تدكرني في المره القادمه</Typography>
              <Checkbox size="small" color="primary" />
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.logIn}
          >
            إنشاء حساب
          </Button>
          <Typography align="center" mt={1} mb={3}>
            هل لديك حساب ؟
          </Typography>
          <Button
            onClick={() => history.push("/login")}
            className={classes.registLink}
          >
            سجل الأن
          </Button>
          <Grid
            container
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Grid item sm={8} xs={12}>
              <Paper elevation={3}>
                <Typography align="center" className={classes.title}>
                  اوالتسجيل بواسطه حساب التواصل الاجتماعي
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <div
            style={{
              display: "flex",
              margin: "2rem 0",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="google"
              src={GoogleIcon}
              style={{ cursor: "pointer" }}
            />
            <Avatar
              className={classes.avatar}
              src={FacebookIcon}
              style={{ cursor: "pointer" }}
            />
            <Avatar
              alt="twitter"
              src={TwiterIcon}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </Grid>
        <Grid item xs={12} md={6} className={classes.containerImg , classes.hides}>
        

          <div className="pair_logo_animi">

          <div>
            <div className="brand">
              <div className="logo">
              <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                <svg width="200px" height="200px">
                  
                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />
                  
                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />

                  <path
                    stroke="#b1d7d9"
                   strokeWidth="0"
                    fill="#b1d7d9"
                    d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
                  />
                  
                </svg>
                
              </div>
              
            </div>
            <img src={BgLogin} className={classes.imgKids} />

          </div>

          </div>
        </Grid>
    </Grid>
  );
};
Register.propTypes = {
  data: PropTypes.object,
  register: PropTypes.func,
};

const mapStateToProps = (state) => ({
  data: state.data.staticData,
});

export default connect(mapStateToProps, { register })(Register);
