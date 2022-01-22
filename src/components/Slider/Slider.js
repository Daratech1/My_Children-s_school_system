import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";
import BrushIcon from "@material-ui/icons/Brush";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardWidth: {
    height: 265,
    width: 250,
    padding: "0px  0",
    "@media (max-width: 767px)": {
      width: "100%",
      height: "auto",
    },
  },
  fullWidthmob: {
    "@media (max-width: 767px)": {
      width: "100%",
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  cardHead: {
    margin: "0 0 1rem 0",
    height: "20%",
  },
  Fonntmid: {
    fontSize: "15px",
  },
  FonntSmall: {
    fontSize: "10px",
    color: "#aaa",
  },
  cardContent: {
    textAlign: "center",
    height: "60%",
  },
  fullHeihgt: {
    height: "100%",
  },
  iconStyle: {
    background: "#fefefe",
    color: "#1cb598",
    borderRadius: " 50%",
    width: "40px",
    height: " 40px",
    padding: "10px",
    boxShadow: "1px 1px 4px #a6a6a6 inset, -3px -3px 4px #bbbbbb inset",
  },
  iconStyle2: {
    background: "#fefefe",
    color: "#1cb598",
    borderRadius: " 10px",
    width: "40px",
    height: " 30px",
    padding: "10px",
    boxShadow: "1px 1px 4px #a6a6a6 , -1px -1px 1px #bbbbbb ",
  },
  chartNum: {
    position: "absolute",
    top: "50%",
    right: "40%",
    fontSize: "1.5rem",
  },
  relative: {
    position: "relative",
  },
}));
export default function SliderCard() {
  const [spacing, setSpacing] = React.useState(1);
  const classes = useStyles();

  React.useEffect(() => {
    // chart 1
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
        datasets: [
          {
            label: "غياب",

            data: [18, 9, 6, 15, 10],
            backgroundColor: [
              "#322165",
              "#322165",
              "#322165",
              "#322165",
              "#322165",
              "#322165",
            ],
            borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            borderWidth: 1,
          },
          {
            label: "حضور",
            data: [12, 19, 3, 5, 20],
            backgroundColor: [
              "#62e5cb",
              "#62e5cb",
              "#62e5cb",
              "#62e5cb",
              "#62e5cb",
              "#62e5cb",
            ],
            borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
        // legend:{
        //   position:"right"
        // },
        // indexAxis: 'y',
      },
    });

    // chart 2
    const ctx2 = document.getElementById("myChart2");
    const myChart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["point 1", "point 2", "point 3"],
        datasets: [
          {
            label: "غياب",
            data: [72, 12, 10],
            backgroundColor: ["#62e5cb", "#444", "#322165"],
            borderColor: ["#fff", "#fff", "#fff"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
        legend: {
          position: "bottom",
        },
      },
    });

    // chart 3
    const ctx3 = document.getElementById("myChart3");
    const myChart3 = new Chart(ctx3, {
      type: "bar",
      data: {
        labels: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
        datasets: [
          {
            label: "",

            data: [90, 40, 80, 10, 30],
            backgroundColor: [
              "#5afadc",
              "#4dd2b9",
              "#38ae98",
              "#137f6b",
              "#a7e6da",
              "#789690",
            ],
            borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
      },
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item className={classes.fullWidthmob}>
              <Card className={(classes.root, classes.cardWidth)}>
                <CardActionArea className={classes.fullHeihgt}>
                  <CardContent className={classes.fullHeihgt}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.cardHead}
                    >
                      عن أبنائي
                    </Typography>
                    <Grid container spacing={2} className={classes.cardContent}>
                      <Grid item xs={4}>
                        <MenuBookIcon className={classes.iconStyle} />
                        <Typography variant="h6" className={classes.Fonntmid}>
                          100,00+
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.FonntSmall}
                        >
                          طالب وطالبه
                        </Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <HomeWorkIcon className={classes.iconStyle} />
                        <Typography variant="h6" className={classes.Fonntmid}>
                          100,00+
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.FonntSmall}
                        >
                          طالب وطالبه
                        </Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <PeopleIcon className={classes.iconStyle} />
                        <Typography variant="h6" className={classes.Fonntmid}>
                          100,00+
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.FonntSmall}
                        >
                          طالب وطالبه
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.fullWidthmob}>
              <Card className={(classes.root, classes.cardWidth)}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      متابعه الطالب
                    </Typography>
                    <Grid>
                      <canvas id="myChart3" width="100%" height="90%"></canvas>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.fullWidthmob}>
              <Card className={(classes.root, classes.cardWidth)}>
                <CardActionArea className={classes.fullHeihgt}>
                  <CardContent className={classes.fullHeihgt}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.cardHead}
                    >
                      الدروس المتاحه
                    </Typography>
                    <Grid className={classes.cardContent}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه عربي"
                            aria-label="لغه عربي"
                            placement="top-start"
                          >
                            <AddToPhotosIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>

                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه رياضيات"
                            aria-label="لغه رياضيات"
                            placement="top-start"
                          >
                            <ApartmentIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>

                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه انجليزي"
                            aria-label="لغه انجليزي"
                            placement="top-start"
                          >
                            <AllInboxIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه تاريخ"
                            aria-label="لغه تاريخ"
                            placement="bottom-start"
                          >
                            <AssignmentIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>

                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه كيمياء"
                            aria-label="لغه كيمياء"
                            placement="bottom-start"
                          >
                            <BallotIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>

                        <Grid item xs={4}>
                          <Tooltip
                            title="لغه فيزياء"
                            aria-label="لغه فيزياء"
                            placement="bottom-start"
                          >
                            <BrushIcon className={classes.iconStyle2} />
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.fullWidthmob}>
              <Card className={(classes.root, classes.cardWidth)}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      نسبه المشاركه
                    </Typography>
                    <Grid className={classes.relative}>
                      <div className={classes.chartNum}>72%</div>
                      <canvas
                        id="myChart2"
                        width="100%"
                        height="40%"
                        style={{ paddingBottom: "10px" }}
                      ></canvas>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.fullWidthmob}>
              <Card className={(classes.root, classes.cardWidth)}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      نسب الغياب
                    </Typography>
                    <Grid>
                      <canvas id="myChart" width="100%" height="90%"></canvas>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
