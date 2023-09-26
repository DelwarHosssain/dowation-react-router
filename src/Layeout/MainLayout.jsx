import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-6 pt-10">
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;