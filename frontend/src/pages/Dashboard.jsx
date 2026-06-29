import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  FaTrash,
  FaEdit,
  FaCheckCircle,
  FaTasks,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const addTaskRef = useRef(null);
  const myTaskRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchTasks();
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);

        setUser(response.data);
      } catch (error) {
        console.log(error.response?.data);
        console.log(error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (editId) {
        await api.put(`/tasks/${editId}`, taskData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEditId(null);
      } else {
        await api.post("/tasks", taskData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      toast.success(
        editId ? "Task Updated Successfully" : "Task Added Successfully",
      );

      await fetchTasks();
      setLoading(false);

      setTaskData({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Task?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        title: "Deleted!",
        text: "Task deleted successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (task) => {
    setTaskData({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate?.split("T")[0] || "",
      priority: task.priority || "Medium",
    });

    setEditId(task._id);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => (filter === "All" ? true : task.status === filter));

  const handleComplete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/tasks/${id}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success("Task Completed");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar
        handleLogout={handleLogout}
        scrollToAddTask={() => scrollToSection(addTaskRef)}
        scrollToMyTasks={() => scrollToSection(myTaskRef)}
      />
      <div className="ml-64 p-8">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold">Welcome, {user?.name} 👋</h1>

          <p className="text-gray-500 mt-2">
            Manage your daily tasks efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500">Total Tasks</h3>
                <h1 className="text-3xl font-bold">{tasks.length}</h1>
              </div>

              <FaTasks className="text-blue-600 text-5xl" />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500">Pending</h3>

                <h1 className="text-3xl font-bold text-yellow-500">
                  {tasks.filter((task) => task.status === "Pending").length}
                </h1>
              </div>

              <FaClock className="text-yellow-500 text-5xl" />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500">Completed</h3>

                <h1 className="text-3xl font-bold text-green-600">
                  {tasks.filter((task) => task.status === "Completed").length}
                </h1>
              </div>
              <FaCheckCircle className="text-green-600 text-5xl" />
            </div>
          </div>
        </div>

        <div ref={addTaskRef} className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {editId ? "Edit Task" : "Add New Task"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={taskData.title}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4"
              />

              <input
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4"
              />

              <select
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <textarea
              name="description"
              placeholder="Task Description"
              value={taskData.description}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-5 py-2 rounded disabled:bg-gray-400"
            >
              {loading ? "Saving..." : editId ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border p-3 rounded-lg"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div ref={myTaskRef}>
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">
              📋 No Tasks Found Start by creating your first task.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Description</th>
                    <th className="p-4 text-left">Due Date</th>
                    <th className="p-4 text-left">Priority</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTasks.map((task) => (
                    <tr key={task._id} className="border-t hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-800">
                        {task.title}
                      </td>

                      <td className="p-4">{task.description}</td>

                      <td className="p-4">
                        {task.dueDate
                          ? new Date(task.dueDate).toLocaleDateString()
                          : "No Date"}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            task.priority === "High"
                              ? "bg-red-500"
                              : task.priority === "Medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            task.status === "Completed"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleComplete(task._id)}
                            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                            title="Complete Task"
                          >
                            <FaCheckCircle />
                          </button>

                          <button
                            onClick={() => handleEdit(task)}
                            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
                          >
                            <FaEdit />
                          </button>

                          <button
                            onClick={() => handleDelete(task._id)}
                            className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
