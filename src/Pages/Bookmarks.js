import React from 'react';
//import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sbbookmark";
import Bookmark from "../components/Booksmarks/Book";
import Widgets from "../components/Widgets";
import "./Home.css";

export default function Bookmarks() {
  return (
    <div className="home">
     <Sidebar />
    {/* sidebar */}

    {/* bookmarks */}
    <Bookmark/>
    {/* widgets */}
    <Widgets/>
    </div>
  );
}