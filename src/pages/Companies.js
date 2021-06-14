import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {CompaniesList} from "../components/companies-list/CompaniesList";


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
      <div className="App-link">
        <h1 className="headings">List of Companies</h1>
       <CompaniesList companies = {companies} />

      </div>

  );
}
