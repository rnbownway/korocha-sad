import {Routes, Route} from "react-router-dom";
import About from "./component/About";
import WhereToBuy from "./component/WhereToBuy";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Partners from "./component/Partners";
import Footer from './component/Footer';
import Apples from "./component/Apples";
import Conservants from "./component/Conservants";
import Saplings from "./component/Saplings";
import JuicesBottle from "./component/JuicesBottle";
import Juices from "./component/Juices";

function App() {
  return (
    <>
      <Navbar />

      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/where-to-buy" element={ <WhereToBuy /> } />
        {/* <Route path="/team" element={ <Team /> } /> */}
        <Route path="/about" element={ <About /> } />
        <Route path="/partners" element={ <Partners /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/apples" element={ <Apples /> } />
        <Route path="/juices-bottle" element={ <JuicesBottle /> } />
        <Route path="/juices" element={ <Juices /> } />
        <Route path="/conservants" element={ <Conservants /> } />
        <Route path="/saplings" element={ <Saplings /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
