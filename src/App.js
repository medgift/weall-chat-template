import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import ConversationMessages from "./pages/ConversationMessages";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Appliers from "./pages/Appliers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the WeAll Chat</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/companies" component={Companies} />
            <Route path="/appliers" component={Appliers} />
            <Route path="/conversation" component={Conversation} />
            <Route path="/conversationMessages" component={ConversationMessages} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
