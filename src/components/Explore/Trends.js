import './Trends.css'
import SearchIcon from '@material-ui/icons/Search'
import { BsGear } from 'react-icons/bs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import mask from '../../Images/mask.jpg';

function Trends() {


    //console.log(posts)

    return (
        <div className="explore-feed">
            <div className="explore-feed__header">

                <div className="explore-widgets__input">
                    <SearchIcon
                        className="explore-widgets__SearchIcon"
                    />
                    <input placeholder="Search Chweeter" type="text"  />
                </div>
                <BsGear className="trend-gear" size="20px" />

            </div>

            <div className="container">
                <img className="explore-img" src={mask} alt="Mask" />
                <div className="text-block">
                    <h5>Converge-19<FiberManualRecordIcon size="1px" style={{ "color": "white" }} /> LIVE</h5>
                    <h3 className="live">
                        Updates on the Converge-19 situation in the Philippines
                        </h3>
                </div>
            </div>
            <div className="explore-widgets__widgetContainer">
                <h2 className="gear">
                    Trends for you
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
            </div>
            <div className="See_more">
                    Show more
                </div>

        </div>
    )
}
export default Trends;
