import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { Music } from "./components/Music";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Music/> */}

      <Mainroutes />
    </div>
  );
}

export default App;
