import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className=" flex justify-between container mx-auto px-6" >
                <div>
                    <img className="w-[50%]" src="/src/assets/image/Logo.png" alt="" />
                </div>
                <div>
                <ul className="flex gap-5 ">
                    <li className="text-xs font-black">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `text-[#FF444A] underline ` : ""
                        }
                    >
                    Home
                    </NavLink>
                    </li>
                    <li className="text-sm  font-black">
                    <NavLink
                        to="/Donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `text-[#FF444A] underline` : ""
                        }
                    >
                    Donation
                    </NavLink>
                    </li>
                    <li className="text-sm font-black">
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