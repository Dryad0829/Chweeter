import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sbnotif";
import Feed from "../components/Notification/Notification";
import Widgets from "../components/Notification/Widgets";
import "./Home.css";

export default function Notifications() {
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