import React from 'react'
import './Widgets.css'
import { BsGear } from 'react-icons/bs';
import SearchIcon from '@material-ui/icons/Search'
import { db, auth } from "../utils/firebase";
import { useEffect, useState } from "react";

function Widgets() {
    // const [userstate, setUserstate] = useState({
    //     informations: [],
    //     isLoading: true,
    // });

    // useEffect(() => {

    //     //this code where the code runs
    //     const fetchData = () => {
    //         db.get(doc => {
    //             let informationsList = [];
    //             doc.forEach(informations => {
    //                 informationsList.push({ ...informations.data() });
    //                 setUserstate({ informations: informationsList, isLoading: false });
    //             })
    //         });
    //     };

    //     fetchData();
    // }, [])
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon
                    className="widgets__SearchIcon"
                />
                <input placeholder="Search Chweeter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2 className="gear">
                    Trends for you  <BsGear className="gear1" />
                </h2>

                <div className="Trending_Worldwide">
                    <div className="Trending_Show">
                        Trending Worldwide
                </div>
                    <div className="tag">
                        #WorldNews
                </div>
                    <div className="tweet_people">
                        125k
                </div>
                    <div className="tweets">
                        6,069 people are tweeting this
                </div>
                </div>
                <div className="Trending_Worldwide">
                    <div className="Trending_Show">
                        Trending Worldwide
                </div>
                    <div className="tag">
                        #WorldNews
                </div>
                    <div className="tweet_people">
                        125k
                </div>
                    <div className="tweets">
                        6,069 people are tweeting this
                </div>
                </div>
                <div className="Trending_Worldwide">
                    <div className="Trending_Show">
                        Trending Worldwide
                </div>
                    <div className="tag">
                        #WorldNews
                </div>
                    <div className="tweet_people">
                        125k
                </div>
                    <div className="tweets">
                        6,069 people are tweeting this
                </div>
                </div>
                <div className="See_more">
                    Show more
                </div>
                </div>

                <div className="widgets__widgetContainer">
                    <h2>Who to follow</h2>
                     {/* {userstate.informations} */}
                </div>
        </div>
    )
}

export default Widgets;
