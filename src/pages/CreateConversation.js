import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";

export default function CreateConversation() {
  const [idUserApplier, setIdUserApplier] = useState("40"); // TODO Récupérer valeur depuis le Context
  const [idUserEnterprise, setIdUserEnterprise] = useState("");
  const [companies, setCompanies] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await Backend.getCompanies();
        setCompanies(companies);
        setIdUserEnterprise(companies[0].id_user);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCompanies();
  }, []);

  const history = useHistory();

  const handleIdUserApplierChange = (e) => {
    setIdUserApplier(e.target.value);
  };

  const handleIdUserEnterpriseChange = (e) => {
    console.log(e.target.value);
    setIdUserEnterprise(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.createConversation(idUserApplier, idUserEnterprise);

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
        {/*<input*/}
        {/*  required*/}
        {/*  placeholder="id applier"*/}
        {/*  type="text"*/}
        {/*  onChange={handleIdUserApplierChange}*/}
        {/*  value={idUserApplier}*/}
        {/*/>*/}
        {/*<br />*/}
        {/*<input*/}
        {/*  required*/}
        {/*  placeholder="id enterprise"*/}
        {/*  type="text"*/}
        {/*  onChange={handleIdUserEnterpriseChange}*/}
        {/*  value={idUserEnterprise}*/}
        {/*/>*/}
        {/*<br />*/}
        <select value={idUserEnterprise} onChange={handleIdUserEnterpriseChange}>
          {companies.map((c) => (
              <option value={c.id_user}>{c.nom}</option>
          ))}
        </select>
        <br/>
        <button type="submit">Create Conversation</button>
      </form>
    </div>
  );
}
