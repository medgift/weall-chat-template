import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Users() {
  // Hold the list of companies in the component state
  const [users, setUsers] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchUsers() {
      try {
        let users = await Backend.users();
        setUsers(users);
      } catch (e) {
        console.error(e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id_user}>{u.e_mail}</li>
        ))}
      </ul>
    </div>
  );
}
