import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import VerfyCode from "components/inputs/veryficationInput";
import OrderForm from "components/inputs/orderForm";
import useForm from "hooks/useForm";
import { createApplication } from "action/applications";
import { sendCode,verifyCode } from "action/mobileCode";
import SecondOrderForm from "components/inputs/secondOrderForm";
import FeedIcon from '@mui/icons-material/Feed';
import secondUseForm from "hooks/secondUseform";
const steps = ["", "", "",""];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
  }),
  ...(ownerState.completed && {
    background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <FeedIcon />,
    3: <GroupAddIcon />,
    4: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const theme = createTheme();
const fieldNum = 7
const Checkout = ({ handleClose, createApplication,sendCode,verifyCode,code,user:{phone}  }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [validCode, setValidCode] = React.useState(false);
  const [fieldNum2,setFieldNum2] =  React.useState(5)

  const finishForm = () => {
     handleClose();
     if(fieldNum2 == 7){
      createApplication(Object.assign(values,values2,{ "transportation_required": true}));

     }else{
      createApplication(Object.assign(values,values2,{ "transportation_required": false}));

     }
  };
  const getTransRequired = (e)=>{
    if(e){
      setFieldNum2(7)
    }
  }
  const { handleChange, values, errors,handleSubmit, disableBtn } = useForm(fieldNum);
  const { handleChange2, values2, errors2,handleSubmit2, disableBtn2 } = secondUseForm(fieldNum2);



  const checkValidCode = (input) => {
    if (input === code) {
      setValidCode(true);
    }else{
      setValidCode(false)
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      handleSubmit();
      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      handleSubmit2();
      setActiveStep(activeStep + 1);
      sendCode();
    } else if (activeStep === 2) {
    setActiveStep(activeStep + 1);
    verifyCode();
  }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const buttonNext = () => {
    if (activeStep === 0) {
     return (
    <Button
      disabled={disableBtn}
      variant="contained"
      onClick={handleNext}
      sx={{ mt: 3, ml: 1 }}
    >
      التالى
    </Button>
     )
    } else if (activeStep === 1) {
      return(
        <Button
        disabled={disableBtn2}
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1 }}
      >
        التالى
      </Button>
      )
    } else if (activeStep === 2) {
      return(
        <Button
        disabled={!validCode}
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1 }}
      >
        التالى
      </Button>
      )
    }
    
};
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OrderForm errors={errors} handleChange={handleChange} />;
      case 1:
        return <SecondOrderForm errors2={errors2} getTransRequired={getTransRequired} handleChange2={handleChange2} />;
      case 2:
        return (
          <>
            <VerfyCode checkValidCode={checkValidCode} phone={phone} />
          </>
        );
      case 3:
        return (
          <>
            <div className="message-box">
              <CheckCircleIcon color="info" />
              <Typography variant="h5" align="center">
                تم تقديم طلبك بنجاح
              </Typography>
            </div>
          </>
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          sx={{ pt: 3, pb: 5 }}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && activeStep !== steps.length - 1 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  رجوع
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={finishForm}
                  sx={{ mt: 3, ml: 1 }}
                >
                  إنهاء
                </Button>
              ) : (
                buttonNext()
              )}
            </Box>
          </React.Fragment>
        </React.Fragment>
      </Container>
    </ThemeProvider>
  );
};

Checkout.propTypes = {
  handleClose: PropTypes.func,
  createApplication: PropTypes.func,
  sendCode: PropTypes.func,
  verifyCode: PropTypes.func,
  code: PropTypes.number,
};
const mapStateToProps = (state) => ({
  code: state.mobileCode.code,
  user: state.auth.user
});
export default connect(mapStateToProps, { createApplication,sendCode,verifyCode })(Checkout);
