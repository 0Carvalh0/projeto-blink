import "./App.css";
import Header from "./components/Home/Header/Header";
import MainContent from "./components/Home/MainContent/MainContent";
import ToolBar from "./components/Home/ToolBar/ToolBar";

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
