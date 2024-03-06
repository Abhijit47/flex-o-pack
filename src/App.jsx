import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import OurClients from "./pages/OurClients";
import OurProducts from "./pages/OurProducts";
import QualityAssurence from "./pages/QualityAssurence";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import Sustainability from "./pages/Sustainability";

function App() {
  return (
    <div className={"mx-auto max-w-6xl"}>
      <Navbar />
      <Routes>
        <Route path={"/"} Component={HomePage} />
        <Route path={"/about-us"} Component={AboutUs} />
        <Route path={"/our-clients"} Component={OurClients} />
        <Route path={"/quality-assurance"} Component={QualityAssurence} />
        <Route path={"/research-development"} Component={ResearchDevelopment} />
        <Route path={"/sustainability"} Component={Sustainability} />
        <Route path={"/our-products"} Component={OurProducts} />
        <Route path={"/contact"} Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
