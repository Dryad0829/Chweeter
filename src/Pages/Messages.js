import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sbmessage";
import Feed from "../components/Messages/Messages";
import Widgets from "../components/Messages/Widgets";
import "./Home.css";

export default function Messages() {
  return (
    <div className="home">
     <Sidebar />
    {/* sidebar */}

    {/* feed */}
    <Feed/>
    {/* widgets */}
    <Widgets/>
    </div>
  );
}