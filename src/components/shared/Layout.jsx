import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./NavBar"

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="h-20 md:h-12 w-full"/>
      <Outlet />
      <Footer/>
    </div>
  );
}
