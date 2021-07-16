import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Avatar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    color: "var(--twitter-color) !important",
    border: "none !important",
    backgroundColor: "white !important",
    textTransform: "inherit !important",
    borderRadius: "30px !important",
    height: "40px !important",
    width: "20vh !important",
    marginTop:"-70px",
    float:"right",
    fontWeight:"900 !important",
    marginRight: "20px",
    '&:hover':{
      cursor:"pointer",
      backgroundColor: "var(--twitter-background) !important",
    },
  },
  modal: {
    display: 'flex',
    marginTop:"50px",
    justifyContent: 'center',
  },
  paper: {
    backgroundColor:" white",
    zIndex: "100",
    border: "1px solid var(--twitter-background)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:"37%",
    height:"30%",
    borderRadius:"20px"
  },

  tweetBox: {
    paddingBottom: "10px",
    borderBottom: "8px solid var(--twitter-background)",
    paddingRight: "10px",
  },
  
  
  
  tweetBox__input: {
    marginLeft: "20px",
    fontSize: "20px",
    border: "none",
    outline: "none",
    padding: "20px",
    display: "flex",
  },
  
  tweetBox__imageInput: {
    border: "none",
    padding: "10px",
    marginLeft:"20px",
    outline:"none",
  },
  
  tweetBox__tweetButton: {
    backgroundColor: "var(--twitter-color) !important",
    border: "none !important",
    color: "white !important",
    fontWeight: "900 !important",
    textTransform: "inherit !important",
    borderRadius: "30px !important",
    height: "40px !important",
    marginTop: "20px !important",
    width: "80px",
    marginLeft: "auto !important",
    filter: "opacity(0.8)",
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
      <button type="button" onClick={handleOpen} className={classes.root}>
        Edit profile
      </button>
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
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg"
                    />
                    <input 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                <input 
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
                <Button className = "tweetBox__tweetButton">Chweet</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}