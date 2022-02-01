import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import StepperForm from "components/stepper/stepper";
import PermissionStepper from "components/stepper/permissionSteper";
import PricingTable from "components/PricingTable/pricingTable";
import AppTable from "components/Table/ApplicationTable";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { getStudents } from "action/students";
import { getApplication,getPlan,sendPlanInfo } from "action/applications";
import StudentCallStepper from "components/stepper/studentCallStepper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import CardFooter from "components/Card/CardFooter";
import {usePagination,usePagination1} from "components/pagniation/pagniation";
import { Pagination } from "@mui/material";
import PaginationItem from '@mui/material/PaginationItem';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const styles = (theme) => ({
  tables: {
    marginTop: "70px",
  },
  cardTable: {
    borderRadius: "20px",
  },
  cardTitleBlack: {
    margin: "0",
    fontWeight: "bold",
    color: "#312163",
  },
  // cardBodyR_padding:{
  //   padding:"0"
  // },

  addButton: {
    direction: "ltr",
    float: "left",
    background: "#fff !important",
    color: "#322165",
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
  paper2: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "30%",
    borderRadius: "20px",
    [theme.breakpoints.down("1g")]: {
      width: "60%",
    },
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "70%",
    maxHeight:"90vh",
    overflow:"auto",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    "&::-webkit-scrollbar":{
      width:" 0.2em"
    },

    "&::-webkit-scrollbar-track":{
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
    },

    "&::-webkit-scrollbar-thumb":{
      backgroundColor: "#312163",
      outline: "1px solid #00daad"
    }
  },
  custom_head:{
    "@media (max-width:650px)":{
      display:"flex",
      flexFlow:"column",
      width:"100%"
    }
  }
});

const useStyles = makeStyles(styles);

const TableList = ( { getStudents,getPlan,sendPlanInfo, students: { students },getApplication,data:{transportations}, applications:{applications,plans,msg} }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [permissionOpen, setPermissionOpen] = React.useState(false);
  const [studtentCallOpen, setStudentCallOpen] = React.useState(false);
  const [payOpen, setPayOpen] = React.useState(false);
  const [appId,setAppId] = useState(1)
  const [showMsg,setShowMsg] = useState(false)
  const [page, setPage] = useState(1);
  const [page1, setPage1] = useState(1);

  const PER_PAGE = 5;

  const count = Math.ceil(applications.length / PER_PAGE);
  const {currentData,jump} = usePagination(applications, PER_PAGE);

  const count1 = Math.ceil(students.length / PER_PAGE);
  const {currentData1,jump1} = usePagination1(students, PER_PAGE);

  useEffect(() => {
    getStudents();
    getApplication();
  }, [getStudents, getApplication]);

  const handleChangePag = (e, p) => {
    setPage(p);
    jump(p);
  };
  const handleChangePag1 = (e, p) => {
    setPage1(p);
    jump1(p);
  };
  const handleShow = ()=>{
    setShowMsg(true)
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenMeeting = () => {
    // setMeetingOpen(true)
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);
const handleOpenPermission=()=>{
  setPermissionOpen(true)
}
const handleOpenCallStudent=()=>{
  setStudentCallOpen(true)
}
const handleClosePermission = useCallback(() => {
  setPermissionOpen(false);
}, [permissionOpen]);
const handleCloseCallStudent = useCallback(() => {
  setStudentCallOpen(false);
}, [studtentCallOpen]);
  const getPlanItems = (id) => {
    getPlan(id)
    setAppId(id)
    setShowMsg(false)
  };
  const handlePayOpen = () => {
    setPayOpen(true);
  };
  const handlePayClose = useCallback(() => {
    setPayOpen(false);
  }, [open]);

  const [open2, setOpen2] = React.useState(true);


  const handleClosePopUp = () => {
    setOpen2(false);
  };

  const params = new URLSearchParams(window.location.search)
  return (
    <>
    <div className={classes.tables}>
    <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={params.get('status') && open2}
          onClose={handleClosePopUp}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          
          <Fade in={params.get('status') &&  open2}>
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
                {params.get('status') !== "00" ? 
                <CheckCircleOutlineIcon
                style={{ color: "green", width: "2em", height: "2em" }}
              />
                :
                 
                <HighlightOffIcon 
                style={{ color: "red", width: "2em", height: "2em" }}
                /> 
                }
                {" "}
                {params.get('status') !== "00"  
                  ? params.get('response_message')
                  : params.get('error_msg')
                  }{" "}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
      <GridContainer className={classes.tables}>
        <div className={classes.custom_head}>
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddCircleIcon />}
            onClick={() => handleOpen()}
          >
            إضافة طلب
          </Button>
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<GppGoodIcon />}
            onClick={() => handleOpenPermission()}
          >
            إستئذان طالب
          </Button>
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<DirectionsRunIcon />}
            onClick={() => handleOpenCallStudent()}
          >
            نداء الطالبات
          </Button>
        </div>
        <GridItem xs={12} sm={12} md={12}>
          <Card className={classes.cardTable}>
            <CardHeader>
              <h4 className={classes.cardTitleBlack}>الطلاب المقيدين</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "الإسم",
                  "الرقم",
                  "القسم",
                  "الفصل",
                  "حالة الدفع",
                  "",
                  "",
                ]}
                tableData={currentData1()}
                handleOpen={handlePayOpen}
                handleOpenMeeting={handleOpenMeeting}
              />
            </CardBody>
            <CardFooter>
              <Pagination count={count1} color="secondary"   size="large" page={page1}  onChange={handleChangePag1}   renderItem={(item) => (
             <PaginationItem
            components={{ previous: ChevronRightIcon, next: ChevronLeftIcon }}
            {...item}
          />
        )}/> 
              </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.tables}>
        <GridItem xs={12} sm={12} md={12}>
          <Card className={classes.cardTable}>
            <CardHeader>
              <h4 className={classes.cardTitleBlack}> قائمة الانتظار</h4>
            </CardHeader>
            <CardBody className={classes.cardBodyR_padding}>
              <AppTable
                tableHeaderColor="primary"
                tableHead={[
                  "الإسم",
                  "هوية الطالب",
                  " النظام ",
                  "النوع",
                  "المرحلة",
                  "الصف",
                  "الحالة",
                  "",
                  "",
                ]}
                tableData={currentData()}
                getId={getPlanItems}
                handleOpenMeeting={handleOpenMeeting}
                handleOpen={handlePayOpen}
              />
              <CardFooter>
              <Pagination count={count} color="secondary"   size="large" page={page}  onChange={handleChangePag}   renderItem={(item) => (
             <PaginationItem
            components={{ previous: ChevronRightIcon, next: ChevronLeftIcon }}
            {...item}
          />
        )}/> 
              </CardFooter>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={permissionOpen}
          onClose={handleClosePermission}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={permissionOpen}>
            <div className={classes.paper}>
              <PermissionStepper handleClose={handleClosePermission}/>              
            </div>
          </Fade>
        </Modal>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <StepperForm handleClose={handleClose} />
            </div>
          </Fade>
        </Modal>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={studtentCallOpen}
          onClose={handleCloseCallStudent}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={studtentCallOpen}>
            <div className={classes.paper}>
              <StudentCallStepper handleClose={handleCloseCallStudent}/>
            </div>
          </Fade>
        </Modal>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={payOpen}
          onClose={handlePayClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={payOpen}>
            <div className={showMsg ? classes.paper2 : classes.paper1}>
              {showMsg ?  <div className="message-box">
              <CheckCircleIcon color="info" />
              <Typography variant="h5" align="center" style={{marginTop: "30px"}}>
                {msg.message}
              </Typography>
            </div> :  <PricingTable plans={plans} applications={applications} transportations={transportations} sendPlanInfo={sendPlanInfo} appId={appId} handleShow={handleShow}/>}

            </div>
          </Fade>
        </Modal>
      </div>
    </div>
    </>
  );
};

TableList.propTypes = {
  getStudents: PropTypes.func.isRequired,
  getApplication: PropTypes.func.isRequired,
  getPlan:PropTypes.func.isRequired,
  sendPlanInfo:PropTypes.func.isRequired,
  students: PropTypes.object,
  applications: PropTypes.object,
  data:PropTypes.object,
  msg:PropTypes.object
};
const mapStateToProps = (state) => ({
  students: state.students,
  applications: state.applications,
  data: state.data.staticData,
});

export default connect(mapStateToProps, { getStudents, getApplication,getPlan,sendPlanInfo })(
  TableList
);
