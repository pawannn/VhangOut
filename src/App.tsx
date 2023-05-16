import WhoAmI from './main-components/whoami'
import Aboutdev from './main-components/aboutdev'
import Otherhumans from './main-components/otherhumans'
import Postsomething from './main-components/postsomething'
import Livefeed from './main-components/livefeed'
import './style/style.scss'
import React from 'react'

import { db } from "./config/firebase"
import { getDocs, collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

export interface messagesType {
  name: string,
  message: string,
}

const App = () => {

  const [chats, setChats] = useState<messagesType[] | null>(null);
  const [fetched, setFetched] = useState<boolean>(false);

  const messagesRef = collection(db, 'messages')

  const loadMessages = async () => {
    const messagesCollection = await getDocs(messagesRef);
    const messagesData = messagesCollection.docs.map((doc) => doc.data())[0] as messagesType;
    if (messagesData && messagesData.message) {
      const tempChats = [];
      for (let i = 0; i < messagesData.message.length; i++) {
        const message = JSON.parse(messagesData.message[i]);
        tempChats.push(message);
      }
      setChats(tempChats);
      setFetched(true);
      console.log(1);
    }
  }

  useEffect(() => {
    if (!fetched) {
      loadMessages();
    }
  }, [fetched])

  return(
    <div className = "container">
        <div className="box"><WhoAmI /></div>
        <div className="box"><Aboutdev /></div>
        <div className="box"><Otherhumans /></div>
        <div className="box livefeed"><Livefeed chats = {chats} /></div>
        <div className="box"><Postsomething setChat = {setChats} chats = {chats} setFetched = {setFetched} /></div>
    </div>
  )
}

export default App