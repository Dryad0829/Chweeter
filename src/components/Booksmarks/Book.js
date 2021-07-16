import './Book.css'

import { AiTwotoneStar } from 'react-icons/ai'

function Book() {


    //console.log(posts)

    return (
        <div className="feed">
        <div className="feed__header">
            <h2>Bookmarks</h2>
            <div className="Star-icon">
                <AiTwotoneStar color="1DA1F2" fontSize="2rem" />
            </div>
        </div>
        <h3 className="note">You haven't added any Chweets to your Bookmarks yet</h3>
        <p>When you do, they'll show up here.</p>
        </div>
    )
}
export default Book;
