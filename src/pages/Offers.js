import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Offers() {
    // Hold the list of appliers in the component state
    const [offers, setOffers] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchOffers(1) {
            try {
                let offers = await Backend.offers();
                setOffers(offers);
            } catch (e) {
                console.error(e);
            }
        }

        fetchOffers();
    }, []);

    return (
        <div>
            <h1>List of Offers</h1>
            <ul>
                {appliers.map((c) => (
                    <li key={c.id_postulant}>{c.nom + " " + c.prenom}</li>
                ))}
            </ul>
        </div>
    );
}