import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import chopta from "../assets/chopta.jpg";
import munnar from "../assets/munnar.jpg";
import shillong from "../assets/shillong.jpg";

const Destinations = () => {

  return (

    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center mb-12">

          Explore Destinations

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card
            image={chopta}
            title="Chopta"
            state="Uttarakhand"
            description="Adventure and nature paradise."
          />

          <Card
            image={munnar}
            title="Munnar"
            state="Kerala"
            description="Tea gardens and eco-tourism."
          />

          <Card
            image={shillong}
            title="Shillong"
            state="Meghalaya"
            description="Waterfalls and food culture."
          />

        </div>

      </section>

      <Footer />

    </>
  );

};

export default Destinations;