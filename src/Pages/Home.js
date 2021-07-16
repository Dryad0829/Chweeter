import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import "./Home.css";

export default function Home() {
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


