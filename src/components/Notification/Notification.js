import './Notification.css';
import { BsGear } from 'react-icons/bs';
import FullWidthTabs from "./FullWidthTabs";

function Notification() {


    //console.log(posts)

    return (
        <div className="notif-feed">
            <div className="notif-feed__header">
                <h2>Notifications <BsGear className="notif-gear1"/></h2>
                <FullWidthTabs/>
            </div>
        </div>
    )
}
export default Notification
