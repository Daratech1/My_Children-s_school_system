import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
// @material-ui/icons
import Notifications from "@material-ui/icons/Notifications";
import PersonIcon from '@mui/icons-material/Person';
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js";
import { logout } from "action/auth";
const useStyles = makeStyles(styles);

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name) {
  return {
    children: `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`,
  };
}

const RTLNavbarLinks = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDrop = Boolean(anchorEl);

  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(null);
  const handleToggle = (event) => {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goProfile = () => {
    history.push("/admin/profile");
  };
  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  return (
    <div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}></p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        {/* <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={open ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} fontSize="large" />
          <span className={classes.notifications}></span>
          <Hidden mdUp implementation="css">
            <p onClick={handleToggle} className={classes.linkText}></p>
          </Hidden>
        </Button> */}
        {/* <Poppers
          open={Boolean(open)}
          anchorEl={open}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !open }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropdownItem}
                    >
                      محمدرضا به ایمیل شما پاسخ داد
                    </MenuItem>
                   
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers> */}
      </div>
      <React.Fragment>
        <Tooltip title={user &&(user.first_name + " " + user.last_name)}  onClick={handleClick}>
          <IconButton size="small" sx={{ ml: 2 }}>
            <Avatar style={{background:stringToColor(user &&(user.first_name + " " + user.last_name))}}   {...stringAvatar(user &&(user.first_name + " " + user.last_name))}/>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={openDrop}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={goProfile} className={classes.profileLink}>
          <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            الملف الشخصى
          </MenuItem>
          <Divider />

          <MenuItem className={classes.profileLink}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            الإعدادت
          </MenuItem>
          <MenuItem onClick={handleLogout} className={classes.profileLink}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            تسجيل الخروج
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
};

RTLNavbarLinks.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(RTLNavbarLinks);
