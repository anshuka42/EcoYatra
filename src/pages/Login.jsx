import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {

  return (

    <>

      <Navbar />

      <section className="min-h-screen flex items-center justify-center">

        <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">

          <h2 className="text-3xl font-bold text-center mb-8">

            Login

          </h2>


          <input

            type="email"

            placeholder="Email"

            className="w-full border p-3 rounded-lg mb-4"

          />


          <input

            type="password"

            placeholder="Password"

            className="w-full border p-3 rounded-lg mb-6"

          />


          <button

            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800"

          >

            Login

          </button>

        </div>

      </section>

      <Footer />

    </>

  );

};

export default Login;