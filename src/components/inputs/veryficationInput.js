import React, { useState } from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import ReactCodeInput from "react-code-input";

const VerfyCode = ({ checkValidCode,phone }) => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  // const checkPinCode = () => {
  //   const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

  //   setBtnIsPressed(true);
  //   setIsPinCodeValid(isPinCodeValid);
  //   if (!isPinCodeValid) setPinCode("");
  // };

  const handlePinChange = pinCode => {
    setPinCode(pinCode);
    checkValidCode(pinCode)
    setBtnIsPressed(false);
  };

  return (
    <div className="message-box">
      <Typography component="h5" variant="h5" align="center">
        أدخل رمز التأكيد
      </Typography>
      <Typography variant="subtitle1" align="center">
        لقد أرسلنا لك رمز التأكيد الى رقم الجوال المسجل لدينا
      </Typography>
      <Typography variant="subtitle1" align="center">
         {phone.replace(/.(?=.{4,}$)/g, '*')}
      </Typography>
      <ReactCodeInput
        id="pinCode"
        type="text"
        isValid={isPinCodeValid}
        fields={4}
        onChange={handlePinChange}
        value={pinCode}
      />
     <label>{!isPinCodeValid && btnIsPressed && "Not valid"}</label>

    </div>
  );
};
VerfyCode.propTypes = {
  checkValidCode: PropTypes.func,
};

export default VerfyCode;
