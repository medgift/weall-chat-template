import React, { useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";

export default function CloseConversation() {
  const [idUserApplier, setIdUserApplier] = useState("");
  const [idUserEnterprise, setIdUserEnterprise] = useState("");

  const history = useHistory();

  const handleIdUserApplierChange = (e) => {
    setIdUserApplier(e.target.value);
  };

  const handleIdUserEnterpriseChange = (e) => {
    setIdUserEnterprise(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      console.log("applier: " + idUserApplier);
      console.log("enterprise: " + idUserEnterprise);
      await Backend.closeConversation(idUserApplier, idUserEnterprise);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Close a Conversation</h1>

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
        <button type="submit">Close Conversation</button>
      </form>
    </div>
  );
}
