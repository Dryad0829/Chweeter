import { Avatar, Button } from "@material-ui/core";
import { useState } from "react";
import "./TweetBox.css";
import { auth, db } from "../utils/firebase";

function TweetBox() {
  const currentUser = auth.currentUser;
  const email = currentUser.email;
  const [tweetMessage, setTweetMessage] = useState("");
  const [status, setStatus] = useState({
    like: 0,
    retweet: 0,
    share: 0,
    reply: 0
  });

  const sendTweet = (e) => {
    e.preventDefault();
    //this code where the code runs
    const currentUser = auth.currentUser;
    db.collection("post").add({
      text: tweetMessage,
      created_At: Date(Date.now()),
      id: currentUser.uid,
      like: status.like,
      retweet: status.retweet,
      share: status.share,
      reply: status.reply,
      email: email
    });
    db.collection("users")
      .doc(currentUser.uid)
      .collection("posts")
      .add({
        text: tweetMessage,
        created_At: Date(Date.now()),
        id: currentUser.uid,
        like: status.like,
        retweet: status.retweet,
        share: status.share,
        reply: status.reply,
        email: email
      });

    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <div className="Btn">
          <Button onClick={sendTweet} className="tweetBox__tweetButton">
            Chweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
