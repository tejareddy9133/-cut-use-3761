import logo from "./logo.svg";
import "./App.css";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroutes />
      {/* <Subscription /> */}
     
    </div>
  );
}

export default App;
