import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import Songitem from "./components/Songitem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroutes />
      <Songitem />
    </div>
  );
}

export default App;
