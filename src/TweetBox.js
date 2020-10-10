import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = () => {

    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=qrgHbDe9G_4AX8S4fiY&_nc_ht=scontent.fbne6-1.fna&oh=1f9f7dde49f35684f0efd216ac5787a2&oe=5FA71970" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
