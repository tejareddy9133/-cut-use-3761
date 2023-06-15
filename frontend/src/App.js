import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <Header/>
      <Navbar />
      <Mainroutes />

    </div>
  );
}

export default App;
