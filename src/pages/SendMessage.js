import React, { useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";

export default function SendMessage() {
  const [idUserApplier, setIdUserApplier] = useState("40"); // TODO Récupérer valeur depuis le Context
  const [idUserEnterprise, setIdUserEnterprise] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleIdUserApplierChange = (e) => {
    setIdUserApplier(e.target.value);
  };

  const handleIdUserEnterpriseChange = (e) => {
    setIdUserEnterprise(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.sendMessage(idUserApplier, idUserEnterprise, message);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Send a Message</h1>

      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="id applier"
          type="text"
          onChange={handleIdUserApplierChange}
          value={idUserApplier}
        />
        <br />
        <input
          required
          placeholder="id enterprise"
          type="text"
          onChange={handleIdUserEnterpriseChange}
          value={idUserEnterprise}
        />
        <br />
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
