import BottomBar from "./Components/BottomBar";
import Content from "./Components/Content";
import {BrowserRouter as Router} from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import "./input.css"

function App() {
  return (
    <Router>

    <div className="wrapper">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
    <BottomBar></BottomBar>
    
    
    
    </Router>
  );
}

export default App;
