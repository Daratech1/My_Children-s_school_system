import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@material-ui/core/Grid";
import Img1 from "assets/img/icons/container 1.png";
import Img2 from "assets/img/icons/container 2.png";
import Img3 from "assets/img/icons/container 4.png";
import Img4 from "assets/img/icons/container 3.png";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SliderCard2() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Grid container spacing={2} className={classes.disBlock} >
      <Grid item xs={6} sm={3} className={classes.fullwidth}>
        <Card sx={{ maxWidth: 345 }} className={classes.cardDash}  onClick={()=>history.push('/admin/calenderChart')}>
          <CardMedia
            component="img"
            height="264"
            image={Img1}
            alt="green iguana"
            className={classes.cardImg}
          />
          <div className={classes.overlay}></div>
          <CardContent className={classes.cardTitle}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.mainTitle}
            >
               الغياب
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.mainTitle}
            >
              متابعة الطلب
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.fullwidth} >
        <Card sx={{ maxWidth: 345 }} className={classes.cardDash} onClick={()=>history.push('/admin/children')}>
          <CardMedia
            component="img"
            height="264"
            image={Img2}
            alt="green iguana"
            className={classes.cardImg}
          />
          <div className={classes.overlay}></div>

          <CardContent className={classes.cardTitle} >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.mainTitle}
            >
               مشاركة
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.mainTitle}
            >
              متابعة الطلب
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.fullwidth} onClick={()=>history.push('/admin/reports')}>
        <Card sx={{ maxWidth: 345 }} className={classes.cardDash}>
          <CardMedia
            component="img"
            height="264"
            image={Img3}
            alt="green iguana"
            className={classes.cardImg}
          />
          <div className={classes.overlay}></div>

          <CardContent className={classes.cardTitle}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.mainTitle}
            >
               تقارير
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.mainTitle}
            >
              متابعة تقارير
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.fullwidth}>
        <Card sx={{ maxWidth: 345 }} className={classes.cardDash} onClick={()=>history.push('/admin/permissions')}>
          <CardMedia
            component="img"
            height="264"
            image={Img4}
            alt="green iguana"
            className={classes.cardImg}
          />
          <div className={classes.overlay}></div>

          <CardContent className={classes.cardTitle}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.mainTitle}
            >
              إستئذانات
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.mainTitle}
            >
              متابعة الطلب
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
