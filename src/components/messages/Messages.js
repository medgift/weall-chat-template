import React from "react";
import "./messages.css"
import {LOGGED_IN_USER_ID} from "../../utils/request";

export default function ConversationMessages({messages}) {

    const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);

    return (
        <div>
            {messages.filter(m => m.message !== null).map((m, index) => (
                <p key={index}>
                    {m.id_user1 == loggedInUserId ? (
                        <div className="messagePostulant">
                            {m.message}
                        </div>
                    ) : (
                        <div className="messageEntreprise">
                            {m.message}
                        </div>
                    )}
                </p>
            ))}
        </div>
    );
}