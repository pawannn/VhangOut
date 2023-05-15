import ChatTemplate from "./ChatTemplate"
import {messagesType} from "../App"
interface props {
    chats: messagesType[] | null,
}
const Livefeed = (props: props) => {
    return(
        <div className="livefeed-container">
            <h1>Live Feed</h1>
            <div className = "live-chat">
                { props.chats && props.chats.map((chat, index) => (
                    <ChatTemplate key={index} name={chat.name} message={chat.message} />
                ))}
            </div>
        </div>
    )
}

export default Livefeed