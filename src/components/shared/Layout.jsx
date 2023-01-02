import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./NavBar"

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}
