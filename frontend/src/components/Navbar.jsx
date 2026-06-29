import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-2xl font-bold">
          TaskFlow
        </h1>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
            }
          >
            Register
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
