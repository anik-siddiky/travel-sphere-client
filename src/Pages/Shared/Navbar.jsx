import { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSingOut = () => {
        signOutUser()
            .then(() => {
                console.log("Signed Out Successful");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li><NavLink to="/myApplications">My Applications</NavLink></li>
            </>
        }
        {
            user && <>
                <li><NavLink to="/addJob">Add Jobs</NavLink></li>
                <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={handleSingOut} className="btn bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium">LogOut</button>
                        </>
                        :
                        <div className='flex gap-2'>
                            <NavLink to="/register" className="btn bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium">Register</NavLink>
                            <NavLink to="/signin" className="btn bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium">SignIn</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;