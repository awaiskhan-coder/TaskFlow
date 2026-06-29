import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-[90vh] flex justify-center items-center bg-gray-100:">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Organize Your Tasks Efficiently
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            TaskFlow helps you manage your daily tasks, stay productive, and
            achieve your goals with ease.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-600 rounded-xl px-6 text-white py-3 hover:bg-blue-700">
              Get Started
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose TaskFlow?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">
                Easy Task Management
              </h3>

              <p className="text-gray-600">
                Create, edit and organize your daily tasks in a simple and clean
                interface.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Stay Productive</h3>

              <p className="text-gray-600">
                Track your progress and complete tasks on time with ease.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Secure Access</h3>

              <p className="text-gray-600">
                Your account is protected using secure authentication with JWT.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  );
};

export default Home;
