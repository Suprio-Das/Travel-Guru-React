import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link>News</Link></li>
                            <li><Link>Destination</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img src="./logo.png" alt="" className="w-24" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow" placeholder="Search your Destination" />
                    </label>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li className="ms-3"><Link>News</Link></li>
                        <li className="ms-3"><Link>Destination</Link></li>
                        <li className="ms-3"><Link>Blog</Link></li>
                        <li className="ms-3"><Link>Contact</Link></li>
                    </ul>
                    <a className="btn ms-3 bg-[#F9A51A]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;