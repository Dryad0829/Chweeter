import React from 'react'
import './Widgets.css'
import { BsGear } from 'react-icons/bs';
import {
    TwitterTimelineEmbed,
} from 'react-twitter-embed'

import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "notif-widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Chweeter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2 className="gear">
                    Trends for you  <BsGear className="gear1"/>
                </h2>
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "GenshinImpact"
                    options = {{ height: 400 }}
                />
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "Crunchyroll"
                    options = {{ height: 400 }}
                />
                
            </div>
            <div className = "widgets__widgetContainer">
                <h2>Who to follow</h2>
                
            </div>
        </div>
    )
}

export default Widgets
