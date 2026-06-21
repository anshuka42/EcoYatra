import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (

    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-green-700 mb-8">

          About EcoYatra

        </h1>

        <p className="text-lg text-gray-600 leading-8">

          EcoYatra is a Responsible Tourism Planner for India designed to
          promote sustainable and community-focused tourism.

          The platform helps travelers discover hidden gems,
          local stays, eco-tourism destinations and authentic food experiences.

        </p>

      </section>

      <Footer />
    </>
  );

};

export default About;