import { Outlet } from "react-router-dom";
import Headerr from "../Components/Header/Headerr";
import Footer from "../Components/Footer/Footer";
import Frame from "../Components/Frame/Frame";

function Layout () {
   return(
    <>
    <Headerr></Headerr>
    <Outlet />
    <Frame></Frame>
    <Footer></Footer>
   
    </>
   )
}
export default Layout;