import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Companies() {
  // Hold the list of companies in the component state
  const [companies, setCompanies] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await Backend.getCompanies();
        setCompanies(companies);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>List of Companies</h1>
      <ul>
        {companies.map((c) => (
          <li key={c.id_entreprise}>{c.nom}</li>
        ))}
      </ul>
    </div>
  );
}
