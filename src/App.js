import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversations from "./pages/Conversations";
import ConversationMessages from "./pages/ConversationMessages";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Appliers from "./pages/Appliers";
import Users from "./pages/Users";
import CreateConversation from "./pages/CreateConversation";
import CloseConversation from "./pages/CloseConversation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the WeAll Chat</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/companies" component={Companies} />
            <Route path="/appliers" component={Appliers} />
            <Route path="/conversations" component={Conversations} />
            <Route path="/createConversation" component={CreateConversation} />
            <Route path="/closeConversation" component={CloseConversation} />
            <Route path="/conversationMessages" component={ConversationMessages} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
