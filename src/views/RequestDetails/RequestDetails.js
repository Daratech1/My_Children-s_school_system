import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Avatar, Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AdjustIcon from "@material-ui/icons/Adjust";
const styles = {
  containerPaper: {
    padding: ".5rem 2rem 2rem 0",
    borderRadius: "15px",
    width: "100%",
  },
  avatar: {
    height: "5rem",
    width: "5rem",
  },
  large: {
    width: "40px",
    height: "40px",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    fontSize: "1.25rem",
    alignItems: "center",
    flexShrink: "0",
    lineHeight: "1",
    userSelect: "none",
    borderRadius: "50%",
    justifyContent: "center",
  },
  padding: {
    paddingRight: "25px",
  },
};

const useStyles = makeStyles(styles);

const RequestDetails = ({ filterobj }) => {
  const classes = useStyles();
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" mb={3}>
          {filterobj.gender_id === "2" ? (
            <Avatar
              alt="Remy Sharp"
              name={filterobj.id}
              src="https://image.flaticon.com/icons/png/512/190/190600.png"
              className={classes.large}
            />
          ) : (
            <Avatar
              alt=""
              src="https://media.istockphoto.com/vectors/european-in-hijab-vector-illustration-a-fairskinned-muslim-woman-vector-id1211606262?k=20&m=1211606262&s=612x612&w=0&h=cNHeekspjhRupOGa2uylejnznaq8huJobb0uYoeSop0="
              className={classes.large}
            />
          )}

          <Typography variant="h4" style={{ marginRight: "1rem" }}>
            {filterobj.student_name} {filterobj.first_name}{" "}
            {filterobj.last_name}
          </Typography>
        </Box>

        <Paper elevation={0} className={classes.containerPaper}>
          <Typography
            variant="h6"
            align="center"
            style={{ marginBottom: "1rem" }}
          >
            بيانات الطلب
          </Typography>
          <Grid container spacing={10}>
            <Grid item sm={6}>
              <div className="form-group" style={{ margin: "0  0 1.5rem 0" }}>
                <Typography
                  style={{ fontWeight: 600, display: "flex", display: "flex" }}
                >
                  {" "}
                  <AdjustIcon /> هويه الطالب{" "}
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.national_id}
                </Typography>
              </div>
              <div className="form-group" style={{ margin: "0  0 1.5rem 0" }}>
                <Typography style={{ fontWeight: 600, display: "flex" }}>
                  <AdjustIcon /> النظام{" "}
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.type_name}
                </Typography>
              </div>{" "}
              <div className="form-group" style={{ margin: "0  0 1.5rem 0" }}>
                <Typography style={{ fontWeight: 600, display: "flex" }}>
                  <AdjustIcon /> النوع{" "}
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.gender_name}
                </Typography>
              </div>{" "}
              <div className="form-group">
                <Typography style={{ fontWeight: 600, display: "flex" }}>
                  <AdjustIcon /> المرحله{" "}
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.grade_name}
                </Typography>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div className="form-group" style={{ margin: "0  0 1.5rem 0" }}>
                <Typography style={{ fontWeight: 600, display: "flex" }}>
                  <AdjustIcon /> الصف
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.level_name}
                </Typography>
              </div>
              <div className="form-group">
                <Typography style={{ fontWeight: 600, display: "flex" }}>
                  <AdjustIcon /> الحاله
                </Typography>
                <Typography className={classes.padding}>
                  {filterobj.status_name}
                </Typography>
              </div>{" "}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
export default RequestDetails;
