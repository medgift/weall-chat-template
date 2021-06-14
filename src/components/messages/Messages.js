import React from "react";
import "./messages.css"

export default function ConversationMessages({messages}) {

    return (
        <div>
                {messages.map((message, index) => (
                    <p key={message.date}>
                        <div className="companyName">
                            <p>{message.nom_entreprise}</p>
                        </div>
                        <div className="messageSent">
                            {message.message}
                        </div>
                        <div className="postulant">
                            {message.nom_postulant}
                        </div>
                        </p>
                ))}
        </div>
    );
}