import React, { useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";
import Companies from "./Companies";

export default function CreateConversation() {
  const [idUserApplier, setIdUserApplier] = useState("40"); // TODO Récupérer valeur depuis le Context
  const [idUserEnterprise, setIdUserEnterprise] = useState("");
  const [companyName, setCompanyName] = useState("");

  const history = useHistory();

  const handleIdUserApplierChange = (e) => {
    setIdUserApplier(e.target.value);
  };

  const handleIdUserEnterpriseChange = (e) => {
    setIdUserEnterprise(e.target.value);
  };

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      console.log("applier: " + idUserApplier);
      console.log("enterprise: " + idUserEnterprise);
      console.log("entrepriseName: " + companyName);
      await Backend.createConversation(idUserApplier, idUserEnterprise, companyName);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 className="headings">Create a Conversation</h1>

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
            placeholder="enterpriseName"
            type="text"
            onChange={handleCompanyName}
            value={companyName}
        />
        <br />
        <button type="submit">Create Conversation</button>
      </form>
      <Companies/>
    </div>
  );
}
