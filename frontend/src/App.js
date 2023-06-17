import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

import { Footer } from "./components/Footer";
import { Spotify } from "./pages/Spotify";

function App() {
  return (
    <div className="App">
      <Mainroutes />

      <Footer />
    </div>
  );
}

export default App;
