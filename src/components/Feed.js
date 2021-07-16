import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

function Feed() {
  const [state, setState] = useState({
    posts: [],
    isLoading: true
  });

  useEffect(() => {
    //const currentUser = auth.currentUser;
    //this code where the code runs
    const fetchData = () => {
      db.collection("post")
        .orderBy("created_At", "desc")
        .onSnapshot((doc) => {
          let postsList = [];
          doc.forEach((posts) => {
            postsList.push({ ...posts.data() });
            setState({ posts: postsList, isLoading: false });
            console.log(postsList);
          });
        });
    };

    fetchData();
  }, []);

  // db.collection('users').doc(currentUser.uid).collection('posts').onSnapshot(snapshot => {
  //     setPosts(snapshot.docs.map(doc => doc.data()));
  // })
  //console.log(posts)

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {state.posts
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
        .map((post) => (
          <Post
            text={post.text}
            created_At={post.created_At}
            like={post.like}
            share={post.share}
            retweet={post.retweet}
            reply={post.reply}
            email={post.email}
          />
        ))}
    </div>
  );
}
export default Feed;
