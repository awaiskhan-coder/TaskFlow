const DashboardNavbar = ({ user, handleLogout }) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow p-4 rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-blue-600">
        TaskFlow
      </h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">
          {user?.name}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;