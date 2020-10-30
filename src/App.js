import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from "./ChatScreen"

function App() {
  return (
    <div className="app">
    
    <Router>
    
      <Switch>
          <Route path="/chat/:person">
              <Header backButton="/chat"/>
              <ChatScreen/>
          </Route>

          <Route path="/chat">
          <Header backButton="/"/>
          {/* Chats.js */}
           <Chats/>
          </Route>

          <Route path="/">
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
            </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
