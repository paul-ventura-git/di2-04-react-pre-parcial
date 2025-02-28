import { Outlet } from "react-router-dom";
import Footer from "./subcomponents/Footer";
import Navbar from "./subcomponents/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}
