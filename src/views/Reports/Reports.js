import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { getReportsShareMethode } from "../../action/reportsAction";
import { getReportsAttandanceMethode } from "../../action/reportAttandanceAction";
import { getStudents } from "../../action/students";
import { getApplication } from "../../action/applications";
import { getStaticData } from "../../action/data";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,

  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    flexGrow: 1,
    width: "100%",
  },
  table: {
    minWidth: 650,
    direction: "rtl",
  },
  pair_dates: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "15px",
    background: "#f5f5f5",
    padding: "10px 10px",
    borderRadius: "7px",
    boxShadow: "1px 1px 2px #aaa",
    flexDirection: "row-reverse",
    gap: "10px",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  pair_radio: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-evenly",
    background: "#f5f5f5",
    borderRadius: "7px",
    boxShadow: "1px 1px 2px #aaa",
    marginBottom: "5px",
  },
  width_c: {
    width: "200px",
  },
  radioStyle: {
    marginTop: "10px",
  },
  tabelHeaderS: {
    margin: "0",
    marginBottom: "20px !important",
    color: "#3f51b5",
    background: "#eee",
    margin: "auto",
    maxWidth: "30%",
    borderRadius: "10px",
    padding: "8px",
    boxShadow: "1px 1px 2px #aaa",
    fontSize: "14px",
  },

}));

// table
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// --------------------------------------------------------------------------------
const Reports = ({
  getReportsShareMethode,
  getReportsAttandanceMethode,
  reportsData_PER: { reportsData_PER },
  reportsData_ATTA: { reportsData_ATTA },

  getStudents,
  getApplication,
  students: { students },
  applications: { applications },

  getStaticData,
  staticData,
}) => {
  //   ---------------------------------------------------------------------------
  const classes = useStyles();
  const theme = useTheme();
  // for main tabs
  const [value, setValue] = useState(0);
  // for sub tabs
  const [valueSubTabs, setValueSubTabs] = useState(0);
  // for select student name 
  const [selectValue, setSelectValue] = useState("all");
  // for select class sesson
  const [selectClassValue, setSelectClassValue] = useState("all");
  // start date
  const [selectedDatestart, setSelectedDatestart] = useState(
    new Date("2022-1-20")
  );
  // end date
  const [selectedDateend, setSelectedDateend] = useState(new Date());
  // for radio button
  const [selectedValueradio, setSelectedValueradio] = useState("a");

  // for radio button function
  const handleChangeradio = (event) => {
    setSelectedValueradio(event.target.value);
  };

  // for main tabs function

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for sub tabs function
  const handleChangeSubTabs = (event, newValue) => {
    setValueSubTabs(newValue);
  };

  // start date function
  const handleDateChangeStart = (date) => {
    setSelectedDatestart(date);
  };

  // end date function
  const handleDateChangeEnd = (date) => {
    setSelectedDateend(date);
  };

  // for select student name func
  const handelSelectValue = (e) => {
    setSelectValue(e.target.value);
  };

  // for select class sesson func
  const handelSelectClassValue = (e) => {
    setSelectClassValue(e.target.value);
  };

  // Start Date vars
  var curr_date_s = selectedDatestart.getDate();
  var curr_month_s = selectedDatestart.getMonth() + 1;
  var curr_year_s = selectedDatestart.getFullYear();
  var finalStartDate = curr_year_s + "-" + curr_month_s + "-" + curr_date_s;

  // End Date vars
  var curr_date_E = selectedDateend.getDate();
  var curr_month_E = selectedDateend.getMonth() + 1;
  var curr_year_E = selectedDateend.getFullYear();
  var finalEndDate = curr_year_E + "-" + curr_month_E + "-" + curr_date_E;
  
  
  // Start call reports Data
  useEffect(() => {
    // لو في التقارير اليوميه
    if (value === 0) {
      // لو مختار تحديد تاريخ واحد فقط
      if (selectedValueradio === "c") {
        // الغياب 
        if (valueSubTabs === 0) {
          getReportsAttandanceMethode({
            date_from: finalStartDate,
            date_to: finalEndDate,
            student_id: selectValue,
          });
          // الاستئذان
        } else if (valueSubTabs === 1) {
          getReportsShareMethode({
            date_from: finalStartDate,
            date_to: finalEndDate,
            student_id: selectValue,
          });
        }
        // لو مختار تحديد تاريخ بدايه ونهايه
      } else {
        if (valueSubTabs === 0) {
          getReportsAttandanceMethode({
            date_from: finalStartDate,
            student_id: selectValue,
          });
        } else if (valueSubTabs === 1) {
          getReportsShareMethode({
            date_from: finalStartDate,
            student_id: selectValue,
          });
        }
      }
    }

    // لو في تقارير فصل دراسي
    if (value === 1) {
      // الغياب 
      if (valueSubTabs === 0) {
        getReportsAttandanceMethode({
          student_id: selectValue,
          semester_id: selectClassValue,
        });
        // الاستئذان 
      } else if (valueSubTabs === 1) {
        getReportsShareMethode({
          student_id: selectValue,
          semester_id: selectClassValue,
        });
      }
    }
  }, [
    getReportsAttandanceMethode,
    getReportsShareMethode,
    selectValue,
    selectedDatestart,
    selectedDateend,
    selectClassValue,
    value,
    valueSubTabs,
  ]);

  // get External data
  useEffect(() => {
    getStudents();
    getApplication();
    getStaticData();
  }, []);

  // ========================================================================
  return (
    <div className={classes.root}>
      {/* pair Tabs Start */}

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="تقارير يوميه" {...a11yProps(0)} />
          <Tab label="تقارير فصل دراسي" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {/* pair Tabs End */}

      {/* sub Tabs start */}
      <div className={classes.root2}>
        <AppBar position="static" color="default" style={{ background: "0" }}>
          <Tabs
            value={valueSubTabs}
            onChange={handleChangeSubTabs}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="الغياب"  {...a11yProps(0)} />
            <Tab label="الأستئذان"  {...a11yProps(1)} />
            <Tab label="المشاركه"  {...a11yProps(2)} />
            <Tab label="Item Four"  {...a11yProps(3)} />
            
          </Tabs>
        </AppBar>
      </div>
      {/* End sub tabs */}

      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* TAB1 */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        
        <div className={classes.pair_radio}>
          <FormControlLabel
            value="start"
            control={
              <Radio
                checked={selectedValueradio === "c" ? false : true}
                onChange={handleChangeradio}
                value="b"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />
            }
            label="تحديد تاريخ"
            labelPlacement="Start"
            className={classes.radioStyle}
          />

          <FormControlLabel
            value="start"
            control={
              <GreenRadio
                checked={selectedValueradio === "c"}
                onChange={handleChangeradio}
                value="c"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
            }
            label="تحديد تاريخ بدايه ونهايه"
            labelPlacement="Start"
            className={classes.radioStyle}
          />
        </div>

        {/* Tab1 header statr */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid className={classes.pair_dates}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label={
                selectedValueradio === "c"
                  ? "تاريخ البدايه"
                  : "التاريخ اليومي للتقرير"
              }
              format="MM/dd/yyyy"
              value={selectedDatestart}
              onChange={handleDateChangeStart}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              className={classes.formControl}
            />
            {selectedValueradio === "c" ? (
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="تاريخ النهايه"
                format="MM/dd/yyyy"
                value={selectedDateend}
                onChange={handleDateChangeEnd}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={classes.formControl}
              />
            ) : null}

            <FormControl className={(classes.formControl, classes.width_c)}>
              <InputLabel htmlFor="grouped-select">حدد الطالب\ه</InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                onChange={(e) => handelSelectValue(e)}
              >
                <MenuItem value="all">
                  <em>جمع الطلاب</em>
                </MenuItem>
                <ListSubheader>الطلاب المقيدين</ListSubheader>

                {students &&
                  students.map((ele, i) => {
                    return (
                      <MenuItem key={i} value={ele.id}>
                        {ele.student_name}
                      </MenuItem>
                    );
                  })}

                <ListSubheader>قائمه الانتظار</ListSubheader>
                {applications &&
                  applications.map((ele, i) => {
                    return (
                      <MenuItem value={ele.id}>{ele.student_name}</MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <Button variant="contained" color="primary">
              حفظ
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
        {/* Tab1 Header End */}

        {/* جدول الغياب start */}
        <TabPanel value={valueSubTabs} index={0}>
          <TableContainer component={Paper}>
            <h5 align="center" className={classes.tabelHeaderS}>
              {reportsData_ATTA.data && reportsData_ATTA.data.report_title}
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.student_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.reason}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.absent_date}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportsData_ATTA.data &&
                  reportsData_ATTA.data.report.map((ele, i) => (
                    <TableRow key={i}>
                      <TableCell align="center" component="th" scope="row">
                        {ele.student_name}
                      </TableCell>
                      <TableCell align="center">{ele.reason}</TableCell>
                      <TableCell align="center">{ele.absent_date}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        {/* جدول الغياب End */}

        {/* جدول الاستئذان start */}
        <TabPanel value={valueSubTabs} index={1}>
          <TableContainer component={Paper}>
            <h5 align="center" className={classes.tabelHeaderS}>
              {reportsData_PER.data && reportsData_PER.data.report_title}
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.student_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.case_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.permission_duration}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.permission_reson}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.pickup_persion}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.pickup_time}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportsData_PER.data &&
                  reportsData_PER.data.report.map((ele, i) => (
                    <TableRow key={i}>
                      <TableCell align="center" component="th" scope="row">
                        {ele.student_name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color:
                            ele.case_color === "warning"
                              ? "#ffbc00"
                              : ele.case_color === "danger"
                              ? "red "
                              : ele.case_color === "success"
                              ? "#00c300"
                              : "",
                        }}
                      >
                        {ele.case_name}
                      </TableCell>
                      <TableCell align="center">
                        {ele.permission_duration}
                      </TableCell>
                      <TableCell align="center">
                        {ele.permission_reson}
                      </TableCell>
                      <TableCell align="center">{ele.pickup_persion}</TableCell>
                      <TableCell align="center">{ele.pickup_time}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        {/* جدول الاستئذان End */}
      </TabPanel>

      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* TAB2 */}
      <TabPanel value={value} index={1} dir={theme.direction}>
        
        {/* Tab2 Header start */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid className={classes.pair_dates}>
            <FormControl className={(classes.formControl, classes.width_c)}>
              <InputLabel htmlFor="grouped-select">
                حدد الفصل الدراسي
              </InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                onChange={(e) => handelSelectClassValue(e)}
              >
                <MenuItem value="all">
                  <em>جميع الفصول</em>
                </MenuItem>
                {staticData.semesters &&
                  Object.values(staticData.semesters).map((ele, i) => {
                    return (
                      <MenuItem
                        key={i}
                        value={Object.keys(staticData.semesters)[i]}
                      >
                        {ele}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <Button variant="contained" color="primary">
              حفظ
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
        {/* Tab2 header End */}

        {/*جدول الغياب  start*/}
        <TabPanel value={valueSubTabs} index={0}>
          <TableContainer component={Paper}>
            <h5 align="center" className={classes.tabelHeaderS}>
              {reportsData_ATTA.data && reportsData_ATTA.data.report_title}
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.student_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.reason}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_ATTA.data &&
                      reportsData_ATTA.data.headers.absent_date}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportsData_ATTA.data &&
                  reportsData_ATTA.data.report.map((ele, i) => (
                    <TableRow key={i}>
                      <TableCell align="center" component="th" scope="row">
                        {ele.student_name}
                      </TableCell>
                      <TableCell align="center">{ele.reason}</TableCell>
                      <TableCell align="center">{ele.absent_date}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        {/*جدول الغياب End  */}

        {/* جدول الاستئذان start */}
        <TabPanel value={valueSubTabs} index={1}>
          <TableContainer component={Paper}>
            <h5 align="center" className={classes.tabelHeaderS}>
              {reportsData_PER.data && reportsData_PER.data.report_title}
            </h5>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.student_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.case_name}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.permission_duration}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.permission_reson}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.pickup_persion}
                  </TableCell>
                  <TableCell align="center">
                    {reportsData_PER.data &&
                      reportsData_PER.data.headers.pickup_time}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportsData_PER.data &&
                  reportsData_PER.data.report.map((ele, i) => (
                    <TableRow key={i}>
                      <TableCell align="center" component="th" scope="row">
                        {ele.student_name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color:
                            ele.case_color === "warning"
                              ? "#ffbc00"
                              : ele.case_color === "danger"
                              ? "red "
                              : ele.case_color === "success"
                              ? "#00c300"
                              : "",
                        }}
                      >
                        {ele.case_name}
                      </TableCell>
                      <TableCell align="center">
                        {ele.permission_duration}
                      </TableCell>
                      <TableCell align="center">
                        {ele.permission_reson}
                      </TableCell>
                      <TableCell align="center">{ele.pickup_persion}</TableCell>
                      <TableCell align="center">{ele.pickup_time}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        {/* جدول الاستئذان End */}

      </TabPanel>

    </div>
  );
};

Reports.propTypes = {
  getReportsShareMethode: PropTypes.func.isRequired,
  getReportsAttandanceMethode: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getApplication: PropTypes.func.isRequired,
  reportsData: PropTypes.object,
  getStaticData: PropTypes.func.isRequired,
  date: PropTypes.string,
};

const mapStateToProps = (state) => ({
  reportsData_PER: state.reportsData_PER,
  reportsData_ATTA: state.reportsData_ATTA,
  students: state.students,
  applications: state.applications,
  staticData: state.data.staticData,
  date: state.date,
});

export default connect(mapStateToProps, {
  getReportsShareMethode,
  getReportsAttandanceMethode,
  getStudents,
  getApplication,
  getStaticData,
})(Reports);

