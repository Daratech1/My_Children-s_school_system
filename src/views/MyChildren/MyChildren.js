import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { loadUser } from "action/auth";

const styles = {
  title: {
    color: "#322263 ",
    padding: "1rem 0 1rem 0",
  },
  container: {
    padding: "1rem 1rem 1rem 0",
    borderRadius: "15px",
    cursor:"pointer"
  },
  avatar: {
    height: "3.5rem",
    width: "3.5rem",
    marginLeft: "1rem",
    border: "1px solid #00DAAD",
  },
  icon: {
    fontSize: ".5rem",
    marginLeft: ".7rem",
    color: "#322263",
  },
  subtitle: {
    marginTop: ".6rem",
    color: "#322263 ",
  },
};

const useStyles = makeStyles(styles);

const MyChildren = ({user:{guardian},loadUser}) => {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    loadUser();
  },[])

  return (
    <Container maxWidth="lg" style={{ padding: "0 3rem" }}>
      <Typography variant="h4" className={classes.title}>
        الأبناء
      </Typography>
      <Grid container spacing={2}>
      {
        guardian.students && guardian.students.map(stud =>
       
          <Grid item sm={4} key={stud.id}>
          <Paper className={classes.container} onClick={()=>history.push(`/admin/childInfo/${stud.id}`)}>
            <Box display="flex">
              <Box>
                <Avatar
                  className={classes.avatar}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsYsNdpCwe2nXXbSGrtcb2NJT7XOMmVmBjQ&usqp=CAU"
                  alt="son image"
                />
              </Box>
              <Box>
                <Typography variant="h6" className={classes.subtitle}>
                {stud.student_name}
                </Typography>

                <Box display="flex" alignItems="center">
                  <FiberManualRecordIcon className={classes.icon} />
                  <Typography style={{ color: "#322263 " }}>
                    الصف 4/1{" "}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <FiberManualRecordIcon className={classes.icon} />
                  <Typography style={{ color: "#322263 " }}>
                    المرحله الأبتدائيه
                  </Typography>
                </Box>
              </Box>
              <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
       
          <MenuItem onClick={handleClose}>
            ydhf
          </MenuItem>
       
      </Menu>
    </div>
            </Box>
          </Paper>
        </Grid>
          )
      }
     
      </Grid>
    </Container>
  );
};

MyChildren.propTypes = {
  loadUser: PropTypes.func,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default  connect(mapStateToProps, {loadUser})(MyChildren);