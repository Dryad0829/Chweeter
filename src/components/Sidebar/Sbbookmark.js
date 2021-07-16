import React from "react";
import {auth} from "../../utils/firebase";
import { makeStyles } from '@material-ui/core/styles';
import { Button, ClickAwayListener, MenuList, MenuItem, Grow, Paper, Popper }from '@material-ui/core';
import  ExitToAppRoundedIcon  from '@material-ui/icons/ExitToAppRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import "../Sidebar.css";
import TransitionsModal from "../../utils/TransitionsModal";
import {Link} from 'react-router-dom';
import logo from "../../Images/cheetahh.png";
import SidebarOption from "../SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Menu from "../../utils/MenuPopupState";

function Sidebar() {
  const signout = ()=>{
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

   }
   const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop:'120px',
      marginLeft: '65px',
      borderRadius:'30px',
      backgroundColor:'#50b7f5',
      width:'15vh',
      height:'50px',
      alignItems:'center'


    },
    paper: {
      marginRight: theme.spacing(2),
      color: "blue"
      
    },
  }));
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

  return (
    <div className="sidebar">
      <div className="sidebarOptionss">
        <Link to='/home'><img className="sidebar__twitterIcon" src={logo} alt="Logo" /></Link>
        <Link to='/home' className="line_color"><SidebarOption Icon={HomeIcon} text="Home" /></Link>
        <Link to='/explore' className="line_color"><SidebarOption Icon={SearchIcon} text="Explore" /></Link>
        <Link to='/notification' className="line_color"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
        <Link to='/messages' className="line_color"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
        <Link to='/bookmarks' className="line_color"><SidebarOption active Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>
        <Link to='/list' className="line_color"><SidebarOption Icon={ListAltIcon} text="Lists" /></Link>
        <Link to='/profile' className="line_color"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
        <Menu />
    </div>
      {/* Button -> Tweet */}
      <TransitionsModal/>
      <div className={classes.root}>
                
              <Button
                variant="text"
                color="inherit"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Account
                <ArrowDropDownRoundedIcon />
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={signout}> <ExitToAppRoundedIcon color="secondary" />Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              </div>
    </div>
  );
}

export default Sidebar;
