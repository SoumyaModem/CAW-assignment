
import './App.css';
import List from "./ListItems/List"
import Navbar from "./Header/Navbar"
import Top from "./Topsection/Top"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="white">
        <Top/>
        <List/>
      </div>
    </div>
  );
}

export default App;
