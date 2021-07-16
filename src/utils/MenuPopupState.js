import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontWeight:"900",
    border: "none !important",
    textTransform: "inherit !important",
    borderRadius: "30px !important",
    height: "40px !important",
    width: "150px",
    marginLeft: "90px !important",
    fontSize:"18px",
    '&:hover':{
      color:"var(--twitter-color)",
    },
  },
  icons:{
    marginRight:"17px",
    marginLeft:"-50px"
  },
  items:{
    marginRight:"20px"
  }
}));

export default function MenuPopupState() {
  const classes = useStyles();
  return (
    
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment className="more-container">
          <Button className={classes.root} {...bindTrigger(popupState)} >
          <MoreHorizIcon className={classes.icons}/> More
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><ChatOutlinedIcon className={classes.items}/>Topics</MenuItem>
            <MenuItem onClick={popupState.close}><FlashOnIcon className={classes.items}/>Moments</MenuItem>
            <MenuItem onClick={popupState.close}><SubjectOutlinedIcon className={classes.items}/> Newsletter</MenuItem>
            <MenuItem onClick={popupState.close}><CallMadeOutlinedIcon className={classes.items}/>Twitter ads</MenuItem>
            <MenuItem onClick={popupState.close}><AssessmentOutlinedIcon className={classes.items}/> Analytics</MenuItem>
            <MenuItem onClick={popupState.close}><SettingsOutlinedIcon className={classes.items}/> Settings and Privacy</MenuItem>
            <MenuItem onClick={popupState.close}><HelpOutlineOutlinedIcon className={classes.items}/>Help Center</MenuItem>
            <MenuItem onClick={popupState.close}><BrushOutlinedIcon className={classes.items}/>Display</MenuItem>
            <MenuItem onClick={popupState.close}><KeyboardOutlinedIcon className={classes.items}/> Keyboard shorcuts</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}