import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sbexplore";
import Trends from "../components/Explore/Trends";
import Widgets from "../components/Explore/Widgets";
import "./Home.css";

export default function Explore() {
  return (
    <div className="home">
     <Sidebar />
    {/* sidebar */}

    {/* Trends */}
    <Trends/>
    {/* widgets */}
    <Widgets/>
    </div>
  );
}