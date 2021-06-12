import React from "react";
import { TOKEN_STORAGE_KEY } from "../utils/request";
import { Link } from "react-router-dom";

export default function Home() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    window.location = "/";
  };

  return (
    <>
      {!localStorage.getItem(TOKEN_STORAGE_KEY) ? (
        <Link className="App-link" to={`/login`}>
          Login (Example)
        </Link>
      ) : (
        <a className="App-link" onClick={logout} href="/">
          Logout
        </a>
      )}

      {/*  <Link className="App-link" to={`/users`}>*/}
      {/*      See List of Users (Example)*/}
      {/*  </Link>*/}
      {/*  <Link className="App-link" to={`/appliers`}>*/}
      {/*      See List of Appliers (Example)*/}
      {/*  </Link>*/}
      {/*<Link className="App-link" to={`/companies`}>*/}
      {/*  See List of Companies (Example)*/}
      {/*</Link>*/}
        <Link className="App-link" to={`/offers`}>
            See List of Offers
        </Link>
        <Link className="App-link" to={`/createConversation`}>
            Create a Conversation
        </Link>
      <Link className="App-link" to={`/conversations`}>
        See List of User's Conversations
      </Link>
        {/*<Link className="App-link" to={`/conversationMessages`}>*/}
        {/*    Go to Conversation's Messages*/}
        {/*</Link>*/}
        {/*<Link className="App-link" to={`/sendMessage`}>*/}
        {/*    Send Message*/}
        {/*</Link>*/}
        <Link className="App-link" to={`/closeConversation`}>
            Close a Conversation
        </Link>
    </>
  );
}
