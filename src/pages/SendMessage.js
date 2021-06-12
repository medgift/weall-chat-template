import React, {useEffect, useState} from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";
import ConversationMessages from "./ConversationMessages";

export default function SendMessage(props) {

  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState(0);

  const history = useHistory();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.sendMessage(props.user1, props.user2, message);

      // Redirect to the home page
      //history.push("/");
      setMessage("");
      setNewMessage(newMessage+1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <ConversationMessages user1={props.user1} user2={props.user2} newMessage={newMessage}></ConversationMessages>
      <h4>Send a message</h4>

      <form onSubmit={handleSubmit}>
        <input
          hidden
          required
          placeholder="id applier"
          type="text"
          value={props.user1}
        />
        <input
          hidden
          required
          placeholder="id enterprise"
          type="text"
          value={props.user2}
        />
        <input
            required
            placeholder="message"
            type="text"
            onChange={handleMessageChange}
            value={message}
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
