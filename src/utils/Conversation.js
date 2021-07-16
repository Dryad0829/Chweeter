import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    justifyContent:"center",
    
  },
  root:{
    backgroundColor: "var(--twitter-color) !important",
    border: "none !important",
    color: "white !important",
    fontWeight: "900 !important",
    textTransform: "inherit !important",
    borderRadius: "30px !important",
    height: "43px !important",
    justifyContent:"center",
    marginTop: "20px !important",
    width: "30vh !important",
    '&:hover':{
      cursor:"pointer",
    }
  },
  closeIcon:{
    '&:hover':{
      cursor:"pointer",
      color:"var(--twitter-color) !important",
      
    },
  },
  closeButton:{
    borderRadius:"100px",
    marginTop:"-5px",
    marginLeft:"-30px"
  },
  text:{
    position:"absolute",
    display:"flex",
    marginTop:"-30px",
    marginLeft:"50px",
    
  },
  modal: {
    display: 'flex',
    marginTop:"65px",
    justifyContent: 'center',
  },
  paper: {
    backgroundColor:" white",
    zIndex: "100",
    border: "1px solid var(--twitter-background)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:"38%",
    height:"85%",
    borderRadius:"20px"
  },

  tweetBox: {
    paddingBottom: "10px",
    borderBottom: "8px solid var(--twitter-background)",
    paddingRight: "10px",
  },
  
  tweetBox__tweetButton: {
    backgroundColor: "var(--twitter-color) !important",
    border: "none !important",
    color: "white !important",
    fontWeight: "900 !important",
    textTransform: "inherit !important",
    borderRadius: "30px !important",
    height: "34px !important",
    width: "70px",
    float:"right",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <div className={classes.container}>
      <button type="button" onClick={handleOpen} className={classes.root}>
        Start a conversation
      </button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form>
            <Button type="button" onClick={handleClose} className ={classes.closeButton}><CloseIcon className={classes.closeIcon} /></Button>
            <h2 className={classes.text}>New Message</h2>
            <Button className = {classes.tweetBox__tweetButton}>Next</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}