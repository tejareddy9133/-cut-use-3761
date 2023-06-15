
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";


import Header from "./components/Header";
import Navbarlinetwo from "./components/Navbarlinetwo";

function App() {
  return (
    <div >
    <Header/>
    <Navbarlinetwo/>
   <Mainroutes/>
    </div>
  );
}

export default App;
