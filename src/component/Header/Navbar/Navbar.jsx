import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className=" ">
            <nav className=" flex justify-between  items-center z-0" >
                <div>
                    <img className="w-[50%]" src="/src/assets/image/Logo.png" alt="" />
                </div>
                <div>
                <ul className="flex gap-5 ">
                    <li className="text-sm font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `text-[#FF444A] underline ` : ""
                        }
                    >
                    Home
                    </NavLink>
                    </li>
                    <li className="text-sm font-bold">
                    <NavLink
                        to="/Donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `text-[#FF444A] underline` : ""
                        }
                    >
                    Donation
                    </NavLink>
                    </li>
                    <li className="text-sm font-bold">
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `text-[#FF444A] underline` : ""
                        }
                    >
                    Statistics
                    </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;