import AuthorCard from "./components/AuthorCard";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthorCard />
      </header>
      <MainContent />
    </div>
  );
}

export default App;
