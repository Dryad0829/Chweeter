import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sbprofile";
import Prof from "../components/Profile/Prof";
import Widgets from "../components/Widgets";
import "./Home.css";

export default function Profile() {
  return (
    <div className="home">
     <Sidebar />
    {/* sidebar */}

    {/* profile */}
    <Prof/>
    {/* widgets */}
    <Widgets/>
    </div>
  );
}