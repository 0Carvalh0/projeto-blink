import "./App.css";
import Header from "./Header/Header.js";
import SideBar from "./Side-Bar/SideBar.js";
import MainContent from "./Main-Content/MainContent.js";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
