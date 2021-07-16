import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { db, auth } from "../../utils/firebase.js";
import { Avatar, Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import moment from "moment";
import { useState, useEffect } from "react";
import "./ProfWidgets.css";
import "./tabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "20px"
  },
  forHover: {
    "&:hover": {
      backgroundColor: "var(--twitter-background) !important"
    }
  }
}));

export default function FullWidthTabs() {
  const [state, setState] = useState({
    posts: [],
    isLoading: true
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    //this code where the code runs
    const fetchData = () => {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("posts")
        .onSnapshot((doc) => {
          let postsList = [];
          doc.forEach((posts) => {
            postsList.push({ ...posts.data() });
            setState({ posts: postsList, isLoading: false });
          });
        });
    };

    fetchData();
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.forHover} label="Chweets" {...a11yProps(0)} />
          <Tab
            className={classes.forHover}
            label="Chweets & Replies"
            {...a11yProps(1)}
          />
          <Tab className={classes.forHover} label="Media" {...a11yProps(2)} />
          <Tab className={classes.forHover} label="Likes" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="user-post">
            <div className="user-post__avatar">
              <Avatar src="" />
            </div>
            <div className="user-post__body">
              <div className="user-post__header">
                <div className="user-post__headerText">
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.email}</Typography>
                  ))}
                  <span className="user-post__headerSpecial">
                    {state.posts.map((posts) => (
                      <Typography key={posts.id}>
                        {moment(posts.created_At).fromNow()}
                      </Typography>
                    ))}
                  </span>
                </div>
                <div className="user-post__headerDescription">
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.text}</Typography>
                  ))}
                </div>
              </div>
              <div className="user-post__footer">
                <Button>
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.reply}</Typography>
                  ))}
                  <ChatBubbleOutlineIcon fontSize="small" />{" "}
                </Button>
                <Button>
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.retweet}</Typography>
                  ))}
                  <RepeatIcon fontSize="small" />
                </Button>
                <Button>
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.like}</Typography>
                  ))}
                  <FavoriteBorderIcon fontSize="small" />
                </Button>
                <Button>
                  {state.posts.map((posts) => (
                    <Typography key={posts.id}>{posts.share}</Typography>
                  ))}
                  <PublishIcon fontSize="small" />{" "}
                </Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Chweets & Replies
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Media
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Likes
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
