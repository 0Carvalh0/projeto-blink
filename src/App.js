import "./App.css";
import Login from "./components/login/login.js"
import Header from "./components/header/header.js"
import PostGenerate from "./components/postGenerate/postGenerate.js"
import ToolBar from "./components/toolBar/toolBar.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToolBar />
    </div>
  );
}

export default App;
