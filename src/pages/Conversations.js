import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import SendMessage from "./SendMessage";
//import {Container, Row, Col } from "react-bootstrap/cjs/Container";
import "./pagesStyle.css";
import 'bootstrap/dist/css/bootstrap.css';

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
      <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h1 className="headings">Your Conversations</h1>
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
            </div>
              <br/>
              <div className="col-sm-4">
                  {user1 > 0 &&
                  <SendMessage user1={user1} user2={user2} />
                  }
              </div>
          </div>

      </div>


  );

}
