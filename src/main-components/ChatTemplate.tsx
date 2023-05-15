interface props {
    name: string,
    message: string,
}

const ChatTemplate = (props: props) => {
    return (
        <div className="chat">
            <span>{props.name}</span>
            <p>{props.message}</p>
        </div>
    )
}

export default ChatTemplate