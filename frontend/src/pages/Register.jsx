import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Input from "../components/Input";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/register", formData);

      toast.success(response.data.message);

      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
