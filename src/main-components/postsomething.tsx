import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { db, auth } from "../config/firebase"
import { collection,  updateDoc, CollectionReference, DocumentData, getDocs } from "firebase/firestore"

interface messagesType {
    name: string,
    message: string,
}

interface props {
    chats: messagesType[] | null,
    setChat: any,
}

const Postsomething = (props: props) => {
    const [user] = useAuthState(auth);
    const [msg, setMsg] = useState<string>("");
    
    const messagesRef = collection(db, 'messages');
    
    const sendMessage = async () => {
        const messageDoc = await getDocs(messagesRef);
        const DocumentRef = messageDoc.docs[0].ref;
        const messagesData = messageDoc.docs.map((doc) => doc.data())[0]
        if(user){
            const message = {
                name: user.displayName,
                message: msg,
            }
            // props.setChat(props.chats != null ? [...props.chats!, message] : [message]);
            messagesData.message.push(JSON.stringify(message));
            await updateDoc(DocumentRef, {
                message: messagesData.message,
            })


            setMsg("");
        } else {
            alert("You must be signed in to post something!");
        }
    }


    return (
        <div className="Postsomething-container">
            <h1>Post Something</h1>
            <div className="postsomething-input">
                <textarea value = {msg} placeholder="Type Something..." onChange={(e) => {setMsg(e.target.value)}}></textarea>
            </div>
            <div className="postsomething-submit">
                <button onClick={sendMessage}>Submit</button>
            </div>
        </div>
    )
}

export default Postsomething