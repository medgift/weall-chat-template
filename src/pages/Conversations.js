import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import ConversationMessages from "./ConversationMessages";
import SendMessage from "./SendMessage";

export default function Conversations() {
  const [conversations, setConversations] = useState([]);
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchConversations() {
            try {
                let conversations = await Backend.getUserConversations(40); // TODO Changer valeur en dur par valeur Context
                setConversations(conversations);
            } catch (e) {
                console.error(e);
            }
        }

        fetchConversations();
    }, []);

  return (
      <div>
          {/* TODO Marina afficher sur la partie gauche de l'écran */}
        <h1>Showing User Conversations</h1>
          {conversations.length > 0 ? (
              <ul>
                  {conversations.map((c) => (

                      <li onClick={()=> {
                          setUser1(c.id_user1)
                          setUser2(c.id_user2)
                      }} key={c.id_user2}>{c.nom_entreprise}</li>
                  ))}
              </ul>
          ) : (
              <p>No conversation yet</p>
          )}
          <br/>
          {user1 > 0 &&
          // TODO Marina afficher sur la partie droite de l'écran
          <SendMessage user1={user1} user2={user2} />
          }
      </div>
  );

}
