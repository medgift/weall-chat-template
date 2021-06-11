import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import "./style.css";
import {CompaniesList} from "../components/companies-list/companiesList";

/*class Companies extends React.Component {

  constructor(){
    super();

    this.state = {
      companies : [],
    };
  }

  componentDidMount() {
    fetch(Backend.companies())
        .then(response => response.json())
        .then(companies => this.setState({companies}));
  }


  render(){
    return (
        <div className="Companies">
          <h1>List of Companies</h1>
          <CompaniesList companies={this.state.companies}>
          </CompaniesList>
        </div>
    );
  } */

export default function Companies() {
  // Hold the list of companies in the component state
  const [companies, setCompanies] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await Backend.companies();
        setCompanies(companies);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCompanies();
  }, []);

  return (
      <div className="App-link">
        <h1>List of Companies</h1>
       <CompaniesList companies = {companies} />
      </div>
  );


}
