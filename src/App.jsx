import "./App.css";
import Hero from "./componants/Hero";
import Herosection from "./componants/Herosection";
import Navbar from "./componants/Navbar";
import Section1 from "./componants/Section1";
import Section2 from "./componants/Section2";
import Section3 from "./componants/Section3";

function App() {
  return (
    <>
      <div className="w-full h-auto">
        <Navbar />
        <Hero />
        <Herosection />
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
    </>
  );
}

export default App;
