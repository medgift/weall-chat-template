import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Appliers() {
    // Hold the list of appliers in the component state
    const [appliers, setAppliers] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchAppliers() {
            try {
                let appliers = await Backend.appliers();
                setAppliers(appliers);
            } catch (e) {
                console.error(e);
            }
        }

        fetchAppliers();
    }, []);

    return (
        <div>
            <h1>List of Appliers</h1>
            <ul>
                {appliers.map((c) => (
                    <li key={c.id_postulant}>{c.nom + " " + c.prenom}</li>
                ))}
            </ul>
        </div>
    );
}