import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Avatar, Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { updateProfile } from "action/Profile";

const styles = {
  ProfileContent: {
    marginTop: "50px",
  },
  containerPaper: {
    padding: "2.5rem 2rem",
    borderRadius: "15px",
    width: "100%",
  },
  boxavatar: {
    width: "100%",
  },
  avatar: {
    height: "5rem",
    width: "5rem",
  },
  btn: {
    background: "#00daad",
    color: "#fff",
    margin: ".5rem 0",
  },
  editBtn: {
    padding: ".1rem 1.5rem .1rem 2.5rem",
    borderRadius: "10px",
    margin: "1rem 0",
  },
};

const useStyles = makeStyles(styles);

const Profile = ({ user, loading, data: { nationalities,countries_id }, updateProfile }) => {
  const classes = useStyles();
  const [displayInput, setDisplayInput] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city_name: "",
    address: "",
    nationality_id: "",
    country_id:"",
    national_id:""
  });

  const {
    first_name,
    last_name,
    email,
    phone,
    city_name,
    address,
    nationality_id,
    country_id,
    national_id
  } = formData;
  useEffect(() => {
    setFormData({
      first_name: loading || !user.first_name ? "" : user.first_name,
      last_name: loading || !user.last_name ? "" : user.last_name,
      email: loading || !user.email ? "" : user.email,
      phone: loading || !user.phone ? "" : user.phone,
      country_id: loading || !user.country_id ? "" : user.country_id,

      city_name:
        loading || !user.guardian.city_name ? "" : user.guardian.city_name,
      address: loading || !user.guardian.address ? "" : user.guardian.address,
      national_id: loading || !user.guardian.national_id ? "" : user.guardian.national_id,

      nationality_id:
        loading || !user.guardian.nationality_id
          ? ""
          : user.guardian.nationality_id,
    });
  }, [setFormData,displayInput]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggleDisplay = () => {
    setDisplayInput(!displayInput);
  };
  const handleSelectNationality = () => {
    return Object.keys(nationalities).map((keyName, i) => (
      <option key={i} value={keyName}>
        {nationalities[keyName]}
      </option>
    ));
  };
  const handleSelectcountries_id = () => {
    return Object.keys(countries_id).map((keyName, i) => (
      <option key={i} value={keyName}>
        {countries_id[keyName]}
      </option>
    ));
  };
  const handleEdit = () => {
    updateProfile(formData);
  };
  return (
    <div className={classes.ProfileContent}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.boxavatar}>
            <Box display="flex" alignItems="center">
              <Avatar alt="personal Image" src="" className={classes.avatar} />
              <Typography variant="h4" style={{ marginRight: "1rem" }}>
                {first_name + " " + last_name}
              </Typography>
            </Box>
            <Button
              onClick={toggleDisplay}
              size="large"
              className={classes.btn}
              startIcon={<EditIcon style={{ marginLeft: ".5rem" }} />}
            >
              تعديل
            </Button>
          </Box>
          <Paper elevation={0} className={classes.containerPaper}>
            <Typography variant="h6" align="center">
              بيانات شخصية
            </Typography>
            <Grid container spacing={7}>
              <Grid item sm={6}>
                <div className="form-group">
                  <label> الأسم الاول</label>
                  <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="الاسم الاول"
                    disabled={displayInput}
                  />
                </div>
                <div className="form-group">
                  <label>الأسم الثاني</label>
                  <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="الاسم الثانى"
                    disabled={displayInput}
                  />
                </div>
                <div className="form-group">
                  <label>هوية ولي الأمر</label>
                  <input
                    type="text"
                    name="national_id"
                    value={national_id}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="هوية ولي الأمر"
                    disabled={displayInput}
                  />
                </div>{" "}
                <div className="form-group">
                  <label>البريد الألكتروني</label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="البريد الإلكترونى"
                    disabled={displayInput}
                  />
                </div>{" "}
                <div className="form-group">
                  <label>رقم الجوال</label>
                  <input
                    type="text"
                    value={phone}
                    name="phone"
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="رقم الجوال"
                    disabled={displayInput}
                  />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="form-group">
                  <label>المدينه</label>
                  <input
                    type="text"
                    name="city_name"
                    value={city_name}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="المدينة"
                    disabled={displayInput}
                  />
                </div>
                <div className="form-group">
                  <label> العنوان</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => onChange(e)}
                    name="address"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="العنوان"
                    disabled={displayInput}
                  />
                </div>
                <div className="form-group">
                  <label>الجنسية </label>
                  <select
                    name="nationality_id"
                    disabled={displayInput}
                    value={nationality_id}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="">إختر الجنسية</option>
                    {nationalities && handleSelectNationality()}
                  </select>
                </div>
                <div className="form-group">
                  <label>الدولة </label>
                  <select
                    name="country_id"
                    disabled={displayInput}
                    value={country_id}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="">إختر الدولة</option>
                    {country_id && handleSelectcountries_id()}
                  </select>
                </div>
              </Grid>
            </Grid>
            <Box align="center">
              <Button
              disabled={displayInput}
                variant="contained"
                size="small"
                startIcon={<EditIcon />}
                color="primary"
                className={classes.editBtn}
              >
                <Typography
                  variant="h6"
                  style={{ marginRight: "1rem" }}
                  onClick={handleEdit}
                >
                  حفظ التعديل
                </Typography>
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.object,
  updateProfile: PropTypes.func,
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  data: state.data.staticData,
  loading: state.auth.loading
});
export default connect(mapStateToProps, { updateProfile })(Profile);
