import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from './Pages/Projects.js'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Mentor from './Pages/Mentor/Mentor'
import HtmlMentoring from './Pages/MentoringProjects/HtmlMentoring'
import CssMentoring from './Pages/MentoringProjects/CssMentoring'
import JsMentoring from './Pages/MentoringProjects/JsMentoring'
import ReactMentoring from './Pages/MentoringProjects/ReactMentoring'
import NodeMentoring from './Pages/MentoringProjects/NodeMentoring'
import MongoMentoring from './Pages/MentoringProjects/MongoMentoring'


function App() {
  return (
<Router>  
    <div >
     
      <Switch> 
      <Route path="/Projects" component={Projects} />
      <Route path="/" exact component={Home} />
      <Route path="/Contact"  component={Contact} />
      <Route path="/Login"  component={Login} />
      <Route path="/Mentor"  component={Mentor} />
      <Route path="/HtmlMentoring"  component={HtmlMentoring} />
      <Route path="/CssMentoring"  component={CssMentoring} />
      <Route path="/JsMentoring"  component={JsMentoring} />
      <Route path="/ReactMentoring"  component={ReactMentoring} />
      <Route path="/NodeMentoring"  component={NodeMentoring} />
      <Route path="/MongoMentoring"  component={MongoMentoring} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
