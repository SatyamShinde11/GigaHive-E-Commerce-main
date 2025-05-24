import { Outlet } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

export function App() {
  return (
    <div className="relative App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
