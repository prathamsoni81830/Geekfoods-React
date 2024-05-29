import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Hero from "./components/Hero.jsx";
import Base from "./components/Base.jsx";
import Footer from "./components/Footer.jsx"

import "./App.css"

function App() {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <Section />
      <Hero />
      <Base/>
      <Footer/>
    </div>
  );
}
export default App;
