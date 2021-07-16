import "./Prof.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import mask from "../../Images/mask.jpg";
import EditBtn from "./TransitionsModal";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Tabs from "./tabs";
import { useState, useEffect } from "react";
import { db, auth } from "../../utils/firebase";
function Prof() {
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
        .collection("informations")
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

  //console.log(posts)

  return (
    <div className="prof-feed">
      <div className="prof-feed__header">
        <Link to="/home">
          <ArrowBackOutlinedIcon className="arr" color="primary" />
        </Link>
        {state.posts.map((informations) => (
          <Typography key={informations.id} variant="h4">
            {informations.firstname}
          </Typography>
        ))}
        <div className="for-p"></div>
      </div>
      <img className="cover" src={mask} alt="cover" />
      <div>
        <img className="for-avatar" src={mask} alt="Profile" />
        <EditBtn />
      </div>
      <div className="data">
        {state.posts.map((informations) => (
          <Typography key={informations.id} variant="h4">
            {informations.firstname + " "} {informations.lastname}
          </Typography>
        ))}
        {state.posts.map((informations) => (
          <Typography key={informations.id} variant="h6" className="textss">
            {"@" + informations.username}
          </Typography>
        ))}
        {state.posts.map((informations) => (
          <Typography key={informations.id} variant="h6" className="textss">
            {informations.created_At}
          </Typography>
        ))}
      </div>
      <div className="links">
        <Link to="/following" className="for-link">
          Following
        </Link>
        <Link to="/follower" className="for-link">
          Followers
        </Link>
      </div>
      <div className="for-tabs">
        <Tabs />
      </div>
    </div>
  );
}
export default Prof;
