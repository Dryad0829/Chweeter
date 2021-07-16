import './Messages.css';
import { BsGear } from 'react-icons/bs';
import { BiMessageAdd } from "react-icons/bi"
import TransitionsModal from "../../utils/Conversation";
function Messages() {


    //console.log(posts)

    return (
        <div className="message-feed">
            <div className="message-feed__header">
                <h2>Messages<BiMessageAdd className="add-message" /> <BsGear className="message-gear" /></h2>
            </div>
            <div className="message-text">
                <h3>Send a message, get a message</h3>
            </div>
            <div className="message-text1">
                <p>Direct Messages are private conversations between  </p>
                <p>you and other people on Twitter. Share Tweets,</p>
                <p>media, and more</p>
            </div>
            <div className="modal">
            <TransitionsModal />
            </div>
        </div>
    )
}
export default Messages
