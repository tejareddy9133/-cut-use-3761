
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";



import { Footer } from "./components/Footer";

function App() {
  return (

    <div className="App">
      {/*    <Header/>

      <Navbarlinetwo/> */}
    
      <Mainroutes/>

      <Footer/>

   

    </div>
  );
}

export default App;
