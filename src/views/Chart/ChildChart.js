import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@mui/icons-material/Info";
import StudentTableShared from "components/StudentTable/StudentTableShared";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getstAssessment } from "action/StudentAssessment";

const styles = (theme) => ({
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 767px)":{
    display: "block",
    }
  },
  addButton: {
    direction: "ltr",
    float: "left",
    background: "#322165 !important",
    color: "#fff",
    fontSize: "20px",
    borderRadius: "15px",
    fontWeight: "bold",
    fontFamily: "Cairo, sans-serif",
    margin: "5px 5px 20px 5px",

    "& svg": {
      color: "#00DDB1",
      width: "30px",
      height: "30px",
      "&,&:focus,&:hover,&:visited": {
        background: "transparent",
      },
    },
    "@media (max-width: 767px)":{
      width: "100%",
      }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    "@media (max-width: 767px)":{
      width: "100%",
      }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  titleHead:{
    "@media (max-width: 767px)":{
      width: "100%",
      fontSize:"1.4em",
      textAlign:"center"
      }
  }
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "تقييم الطالب",
    },
  },
  
};

const labels = ["الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "الاحد"];

const useStyles = makeStyles(styles);

const ChildChart = ({
  getstAssessment,
  assessmentData: { assessmentData },
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openselect, setOpenselect] = useState(true);
  const [dayDate, setDayDate] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [sf, setSf] = useState(false);
  const handleChangeDay = (event) => {
    setDayDate(event.target.value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getstAssessment(dayDate);
  }, [dayDate]);

  const dateStrinng = assessmentData.map((ele) => {
    return ele.report_date;
  });

  useEffect(() => {
    setSelectData(dateStrinng);
    setTimeout(() => {
      setOpenselect(!openselect);
    }, 1);
  }, [sf]);

  // start handel Chart ============

  // Empty Array for pushing handel data in it
  let ChartArray = [];

  // push data in the empty Array
  assessmentData.map((item) => {
    return item.marks.map((ele) => {
      ChartArray.push(ele);
    });
  });

  // handel data insid chart variable
  let handelData = ChartArray.map((ele) => {
    return {
      label: ele.subject_name,
      data: {
        "":
          parseFloat(ele.home_work) +
          parseFloat(ele.participation) +
          parseFloat(ele.attention) +
          parseFloat(ele.tools),
      },
      borderColor: `rgb(${Math.random() * 255},${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`,
    };
  });
  // end handel Chart ============

  return (
    <div className="chart-box custom-width">
      <div className={classes.headerBox}>
        
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            حدد اليوم
          </InputLabel>
          <Select
            open={openselect}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={dayDate}
            onChange={handleChangeDay}
            onClick={() => {
              setSf(true);
              setOpenselect(!openselect);
            }}
          >
            <MenuItem value="">
              <em>غير محدد</em>
            </MenuItem>
            {selectData.map((ele, i) => {
              return (
                <MenuItem MenuItem value={ele} key={i}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <h2 className={classes.titleHead}>تقييم الطالب</h2>
        <Button
          variant="contained"
          className={classes.addButton}
          startIcon={<InfoIcon />}
          onClick={handleOpen}
        >
          تفاصيل
        </Button>
      </div>
      {open && <StudentTableShared assessmentData={assessmentData} />}
      {!open && (
        <Bar
          options={options}
          data={{
            datasets: handelData,
          }}
        />
      )}
    </div>
  );
};

ChildChart.propTypes = {
  getstAssessment: PropTypes.func.isRequired,
  assessmentData: PropTypes.object,
  date: PropTypes.string,
};

const mapStateToProps = (state) => ({
  assessmentData: state.assessmentData,
  date: state.date,
});

export default connect(mapStateToProps, { getstAssessment })(ChildChart);
