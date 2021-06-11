import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {CompaniesList} from "../components/companies-list/companiesList";
import Companies from "./Companies";

export default function ConversationMessages() {
    const [conversationMessages, setConversationMessages] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchconversationMessages(idUser1, idUser2) {
            try {
                let conversationMessages = await Backend.conversationMessages(idUser1,idUser2);
                setConversationMessages(conversationMessages);
                console.log(conversationMessages);
            } catch (e) {
                console.error(e);
            }
        }

        fetchconversationMessages(1,2); // Mettre ici les id pour tester
    }, []);

    return (
        <div>
            <h1>Showing Conversation's Messages</h1>
            <ul>
                {conversationMessages.map((c) => (
                    <li key={c.id_user1}>{c.message}</li>
                ))}
            </ul>
           <Companies />
        </div>
    );

}