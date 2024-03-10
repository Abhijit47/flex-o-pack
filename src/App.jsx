import { Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CustomRouter from "./components/CustomRouter";
import Footer from "./components/Footer";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";
import WhatsappComponent from "./components/WhatsappComponent";
import AboutUs from "./pages/AboutUs";
import BlenderScrewConveyor from "./pages/BlenderScrewConveyor";
import BucketElevator from "./pages/BucketElevator";
import Contact from "./pages/Contact";
import DMotionTypePackagingMachine from "./pages/DMotionTypePackagingMachine";
import FryumsPackingMachine from "./pages/FryumsPackingMachine";
import HomePage from "./pages/HomePage";
import HorizontalAutomaticFlowWrapMachine from "./pages/HorizontalAutomaticFlowWrapMachine";
import NotFound from "./pages/NotFound";
import OurClients from "./pages/OurClients";
import OurProducts from "./pages/OurProducts";
import QualityAssurence from "./pages/QualityAssurence";
import RasgullaBallMakingMachine from "./pages/RasgullaBallMakingMachine";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import ScrewConveyor from "./pages/ScrewConveyor";
import Sustainability from "./pages/Sustainability";
import TeaPackingMachine from "./pages/TeaPackingMachine";
import ToyConveyor from "./pages/ToyConveyor";

function App() {
  return (
    <div className={"relative mx-auto max-w-6xl"}>
      <HeaderBanner />
      <Navbar />
      <CustomRouter>
        <Route path={"/"} Component={HomePage} />
        <Route path={"/about-us"} Component={AboutUs} />
        <Route
          path={"/our-clients"}
          element={
            <Suspense fallback={"Loading...."}>
              <OurClients />
            </Suspense>
          }
        />
        <Route path={"/quality-assurance"} Component={QualityAssurence} />
        <Route path={"/research-development"} Component={ResearchDevelopment} />
        <Route path={"/sustainability"} Component={Sustainability} />
        <Route path={"/our-products"} Component={OurProducts}>
          <Route
            path={"fryums-packing-machine"}
            element={<FryumsPackingMachine />}
          />
          <Route path={"tea-packing-machine"} element={<TeaPackingMachine />} />
          <Route
            path={"horizontal-automatic-flow-wrap-machine"}
            element={<HorizontalAutomaticFlowWrapMachine />}
          />
          <Route
            path={"rasgulla-ball-making-machine"}
            element={<RasgullaBallMakingMachine />}
          />
          <Route
            path={"d-motion-type-packaging-machine"}
            element={<DMotionTypePackagingMachine />}
          />
          <Route path={"screw-conveyor"} element={<ScrewConveyor />} />
          <Route
            path={"blender-screw-conveyor"}
            element={<BlenderScrewConveyor />}
          />
          <Route path={"bucket-elevator"} element={<BucketElevator />} />
          <Route path={"toy-conveyor"} element={<ToyConveyor />} />
        </Route>
        <Route path={"/contact"} Component={Contact} />
        <Route path={"*"} element={<NotFound />} />
      </CustomRouter>
      <Footer />

      <WhatsappComponent />
    </div>
  );
}

export default App;
