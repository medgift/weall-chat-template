import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import SendMessage from "./SendMessage";

export default function ConversationMessages(props) {

    const [conversationMessages, setConversationMessages] = useState([]);


    // Load the companies on component mounting
    useEffect(() => {
        async function fetchconversationMessages(idUser1, idUser2) {
            try {
                let conversationMessages = await Backend.getConversationMessages(idUser1,idUser2);
                setConversationMessages(conversationMessages);
            } catch (e) {
                console.error(e);
            }
        }

        fetchconversationMessages(props.user1, props.user2);
    }, [props.user2, props.newMessage]);

  return (
      <div>
        <h4>Conversation's messages</h4>
        <ul>
          {conversationMessages.map((c, index) => (
              <li key={index}>{c.message}</li>
          ))}
        </ul>
      </div>
  );

}
