import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Conversations() {
  const [conversations, setConversations] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchConversations() {
            try {
                let conversations = await Backend.getUserConversations(40); // TODO Changer valeur en dur par valeur Context
                setConversations(conversations);
                console.log(conversations);
            } catch (e) {
                console.error(e);
            }
        }

        fetchConversations();
    }, []);

  return (
      <div>
        <h1>Showing User Conversations</h1>
          {conversations.length > 0 ? (
              <ul>
                  {conversations.map((c) => (
                      <li key={c.id_user2}>{c.nom_entreprise}</li>
                  ))}
              </ul>
          ) : (
              <p>No conversation yet</p>
          )}

      </div>
  );

}
