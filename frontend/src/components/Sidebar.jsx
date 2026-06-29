import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ handleLogout, scrollToAddTask, scrollToMyTasks }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 fixed">
      <h1 className="text-3xl font-bold text-blue-400 mb-10">TaskFlow</h1>

      <div className="flex flex-col gap-5">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          <div className="flex items-center gap-3">
            <FaHome />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <Link
          to="/dashboard"
          className="hover:bg-gray-800 px-4 py-3 rounded-lg transition"
        >
          <button
            onClick={scrollToAddTask}
            className="hover:bg-gray-800 px-4 py-3 rounded-lg transition text-left w-full"
          >
            <div className="flex items-center gap-3">
              <FaPlus />
              <span>Add Task</span>
            </div>
          </button>
        </Link>

        <Link
          to="/dashboard"
          className="hover:bg-gray-800 px-4 py-3 rounded-lg transition"
        >
          <button
            onClick={scrollToMyTasks}
            className="hover:bg-gray-800 px-4 py-3 rounded-lg transition text-left w-full"
          >
            <div className="flex items-center gap-3">
              <FaTasks />
              <span>My Tasks</span>
            </div>
          </button>
        </Link>

        <button
          onClick={handleLogout}
          className="text-left hover:bg-red-600 px-4 py-3 rounded-lg transition"
        >
          <div className="flex items-center gap-3">
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
