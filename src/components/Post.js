import { Avatar, Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import moment from "moment";
import "./Post.css";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const Post = forwardRef(
  (
    {
      id,
      displayName,
      username,
      text,
      email,
      lastname,
      avatar,
      created_At,
      verified,
      image,
      retweet,
      like,
      share,
      reply
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {email}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  {" Chweet " + moment(created_At).fromNow()}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <Button>
              {reply}
              <ChatBubbleOutlineIcon fontSize="small" />{" "}
            </Button>
            <Button>
              {retweet}
              <RepeatIcon fontSize="small" />
            </Button>
            <Button>
              {like}
              <FavoriteBorderIcon fontSize="small" />
            </Button>
            <Button>
              {share}
              <PublishIcon fontSize="small" />{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
forwardRef.propTypes = {
  createdOn: PropTypes.string
};
export default Post;
