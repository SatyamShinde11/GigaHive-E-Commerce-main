import { Outlet } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import AnimationLogo from "./assets/AnimationLogo";

export function App() {
  return (
    <div className="relative App">
      <div className="absolute flex  svgBOX justify-center items-center h-[110vh]  w-full top-[-60px] z-50 ">
       <AnimationLogo/>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
