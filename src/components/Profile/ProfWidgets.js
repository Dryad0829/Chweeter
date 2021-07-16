import React from 'react'
import './ProfWidgets.css'
import { BsGear } from 'react-icons/bs';

import SearchIcon from '@material-ui/icons/Search'

function ProfWidgets() {
    return (
        <div className="Prof-widgets">
            <div className="Prof-widgets__input">
                <SearchIcon
                    className="Prof-widgets__SearchIcon"
                />
                <input placeholder="Search Chweeter" type="text" />
            </div>

            <div className="Prof-widgets__widgetContainer">
                <h2>Who to follow</h2>
            </div>
            <div className="Prof-widgets__widgetContainer">
                <h2 className="Prof-gear">
                    Trends for you  <BsGear className="Prof-gear1" />
                </h2>

                <div className="Prof-Trending_Worldwide">
                    <div className="Prof-Trending_Show">
                        Trending Worldwide
                    </div>
                    <div className="Prof-tag">
                        #WorldNews
                    </div>
                    <div className="Prof-tweet_people">
                        125k
                    </div>
                    <div className="Prof-tweets">
                        6,069 people are tweeting this
                    </div>
                </div>
                <div className="Prof-See_more">
                    Show more
                </div>
            </div>
        </div>
    )
}

export default ProfWidgets;
