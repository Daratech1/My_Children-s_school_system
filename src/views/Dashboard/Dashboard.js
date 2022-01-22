/* eslint-disable no-unused-vars */
import React from "react";
// react plugin for creating charts

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Carousel from 'react-material-ui-carousel'
import SliderCard from "components/Slider/Slider"
import SliderCard2 from "components/Slider/index"

import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.sliderBox}>
        <SliderCard2 />
    </div>
     <div className={classes.sliderBox}>
     <SliderCard />
   </div>
   </>
  );
}
