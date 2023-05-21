import Footer from "./components/global/Footer";
import MobileNavbar from "./components/global/MobileNavbar";
import Navbar from "./components/global/Navbar";
import "./index.css";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={pathname} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>

        <Outlet />

      </main>
      <Footer />
    </div>
  );
}

export default App;