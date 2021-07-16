import Usertabs from "./tabs.js";
import { useEffect, useState } from "react";
import { db, auth } from "../../utils/firebase";
import "./Tabspost.css";

function Tabspost() {
  const [state, setState] = useState({
    userposts: [],
    isLoading: true
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    //this code where the code runs
    const fetchData = () => {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("posts")
        .orderBy("created_At", "desc")
        .onSnapshot((doc) => {
          let postsList = [];
          doc.forEach((posts) => {
            postsList.push({ ...posts.data() });
            setState({ userposts: postsList, isLoading: false });
            //console.log(postsList);
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
    <div className="user-feed">
      <div className="user-feed__header"></div>
      {state.userposts
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
        .map((posts) => (
          <Usertabs
            text={posts.text}
            created_At={posts.created_At}
            like={posts.like}
            share={posts.share}
            retweet={posts.retweet}
            reply={posts.reply}
            email={posts.email}
          />
        ))}
    </div>
  );
}
export default Tabspost;
