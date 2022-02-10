import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/PermissionTable/PermissionTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";



import { getPermissions } from "action/Permissions";

const styles = (theme) => ({
  tables: {
    // marginTop: "70px",
  },
  cardTable: {
    borderRadius: "20px",
  },
  cardTitleBlack: {
    margin: "0",
    fontWeight: "bold",
    color: "#312163",
  },
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
    width: "40%",
    borderRadius: "20px",
    [theme.breakpoints.down("1g")]: {
      width: "80%",
    },
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
});

const useStyles = makeStyles(styles);

const Permissions = ({ getPermissions, permissions: { permissions } }) => {
  const classes = useStyles();
  useEffect(() => {
    getPermissions();
  }, [getPermissions]);

 
  return (
    <>
    <div className={classes.tables}>
      <GridContainer className={classes.tables}>
        <GridItem xs={12} sm={12} md={10}>
          {/* <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddCircleIcon />}
          >
             
          </Button> */}
         
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardTable}>
            <CardHeader>
              <h4 className={classes.cardTitleBlack}> الاستئذانات</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "إسم الطالب",
                  "تاريخ الاستئذان",
                  "المرافق",
                  "السبب",
                  "المدة ",
                  "حالة الإذن",
                ]}
                tableData={permissions}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    </>
  );
};

Permissions.propTypes = {
  getPermissions: PropTypes.func.isRequired,
  permissions: PropTypes.object,
};
const mapStateToProps = (state) => ({
    permissions: state.permissions,
});

export default connect(mapStateToProps, { getPermissions })(
  Permissions
);
