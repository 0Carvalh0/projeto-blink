import "./App.css";
import Login from "./components/login/login.js"
import Header from "./components/header/header.js"
import MainContent from "./components/mainContent/mainContent.js"
import ToolBar from "./components/toolBar/toolBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ToolBar />
    </div>
  );
}

export default App;
