import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import RegularButton from "components/CustomButtons/Button";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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

const PricingTable = ({ plans , tableData }) => {
  let history = useHistory();
  const [value, setValue] = React.useState("1");

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

  const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };



  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [age2, setAge2] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  
  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const handleCloseSelect = () => {
    setOpen(false);
  };

  const handleOpenSelect = () => {
    setOpen(true);
  };
  
  const handleChangeSelect2 = (event) => {
    setAge2(event.target.value);
    };

  const handleCloseSelect2 = () => {
    setOpen2(false);
  };

  const handleOpenSelect2 = () => {
    setOpen2(true);
  };
  
  return (
    <div className="pricing-table">
      <h2>اختر خطة الدفع</h2>
      <div className="pricing-items">
        {plans &&
          plans.map((prop) => (
            <div
              className={`${prop.id == value ? "item active" : "item"}`}
              key={prop.id}
              onClick={() => handleChoose(prop.id)}
            >
              <div className="discount">
                <span className="number">{prop.id}0%</span> خصم
              </div>
              <h4 className="title-item">{prop.plan_name} </h4>
              <ul>
                <li>
                  <span className="name">القيمة:</span>
                  <span className="value">{prop.cost}</span>
                </li>
                <li>
                  <span className="name">القيمة بعد الخصم:</span>
                  <span className="value">{prop.after_discount}</span>
                </li>
                <li>
                  <span className="name">دفع فوري:</span>
                  <span className="value">{prop.pay_now}</span>
                </li>
              </ul>
              <hr />
              <div className="money-dis">
                <span>{Math.floor(prop.after_discount) - Math.floor(prop.pay_now)}</span> وفر / رس
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
          ))}
      </div>

      <div className={classes.pair_Moving}>
        <div className="pair_checkbox">
          <Checkbox
            id="myCheck"
            checked={checked}
            onChange={handleChangeCheck}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label style={{ cursor: "pointer" }} htmlFor="myCheck">
            {" "}
            الأشتراك في خدمه النقل{" "}
          </label>
        </div>

        <div className={classes.pair_selectbox}>
          {checked === true ? (
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-controlled-open-select-label"
                style={{ left: "inherit", right: "0", top: "-5px" }}
              >
                أختر النوع
              </InputLabel>
              <Select
                className={classes.removeBefore}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleCloseSelect}
                onOpen={handleOpenSelect}
                value={age}
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>لاشئ</em>
                </MenuItem>
                <MenuItem value={10}>ذهاب</MenuItem>
                <MenuItem value={20}>عوده</MenuItem>
                <MenuItem value={30}>ذهاب و عوده</MenuItem>
              </Select>
            </FormControl>
          ) : null}

          {age !== "" && checked === true ? (
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-controlled-open-select-label"
                style={{ left: "inherit", right: "0", top: "-5px" }}
              >
                أختر المده
              </InputLabel>
              <Select
                className={classes.removeBefore}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open2}
                onClose={handleCloseSelect2}
                onOpen={handleOpenSelect2}
                value={age2}
                onChange={handleChangeSelect2}
              >
                <MenuItem value="">
                  <em>لاشئ</em>
                </MenuItem>
                <MenuItem value={10}>سانوي</MenuItem>
                <MenuItem value={20}>فصلي</MenuItem>
                <MenuItem value={30}> شهري </MenuItem>
              </Select>
            </FormControl>
          ) : null}

         {checked === true ? <span style={{ marginTop: "15px" }}>SAR {age + age2}</span> : null}
        </div>
        <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "15px" }}
          >
            تأكيد
          </Button>
      </div>

      <div className="plan-action">
        <RegularButton
          variant="contained"
          color="primary"
          onClick={() => history.push(`/admin/payment`)}
        >
          تحويل
        </RegularButton>
      </div>
    </div>
  );
};
PricingTable.propTypes = {
  plans: PropTypes.array,
};

export default PricingTable;
