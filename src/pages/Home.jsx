import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import CollectionCard from "../components/CollectionCard";
import ForestDivider from "../components/ForestDivider";
import AirlinePartners from "../components/AirlinePartners";
import Footer from "../components/Footer";

import collection1 from "../assets/images/collection1.jpg";
import collection2 from "../assets/images/collection2.jpg";
import collection3 from "../assets/images/collection3.jpg";

import chopta1 from "../assets/images/chopta1.jpg";
import chopta2 from "../assets/images/chopta2.jpg";
import chopta3 from "../assets/images/chopta3.jpg";
import chopta4 from "../assets/images/chopta4.jpg";

import munnar1 from "../assets/images/munnar1.jpg";
import munnar2 from "../assets/images/munnar2.jpg";
import munnar3 from "../assets/images/munnar3.jpg";
import munnar4 from "../assets/images/munnar4.jpg";

const Home = () => {

  return (

    <>

      <Navbar />

      <Hero />

      <SearchBar />



      {/* Featured Destinations */}



      <section

        className="

        max-w-7xl

        mx-auto

        px-6

        md:px-10

        pt-44

        pb-32

        dark:bg-[#0F172A]

        transition-all

        duration-500

        "

      >



        <div className="text-center mb-24">

          <p

            className="

            text-green-600

            uppercase

            tracking-[5px]

            font-semibold

            "

          >

            Explore India

          </p>



          <h1

            className="

            text-5xl

            md:text-6xl

            font-bold

            mt-6

            text-gray-800

            dark:text-white

            "

          >

            Featured Destinations

          </h1>

        </div>





        <div

          className="

          grid

          grid-cols-1

          md:grid-cols-2

          gap-14

          xl:gap-16

          "

        >

          <DestinationCard

            img1={chopta1}

            img2={chopta2}

            img3={chopta3}

            img4={chopta4}

            title="Chopta"

            state="Uttarakhand"

            rating="4.8"

          />



          <DestinationCard

            img1={munnar1}

            img2={munnar2}

            img3={munnar3}

            img4={munnar4}

            title="Munnar"

            state="Kerala"

            rating="4.9"

          />

        </div>

      </section>





      <div className="py-12">

        <ForestDivider/>

      </div>







      {/* Handpicked Collections */}





      <section

        className="

        max-w-7xl

        mx-auto

        px-6

        md:px-10

        py-36

        dark:bg-[#0F172A]

        "

      >



        <div className="text-center mb-24">

          <h1

            className="

            text-5xl

            md:text-6xl

            font-bold

            dark:text-white

            "

          >

            Handpicked Collections

          </h1>



          <p

            className="

            text-gray-500

            dark:text-gray-400

            mt-6

            text-lg

            "

          >

            Curated experiences just for you

          </p>

        </div>





        <div

          className="

          grid

          grid-cols-1

          md:grid-cols-3

          gap-10

          lg:gap-14

          "

        >

          <CollectionCard

            image={collection1}

            title="Mountain Escapes"

            subtitle="Adventure"

          />



          <CollectionCard

            image={collection2}

            title="Tea Gardens"

            subtitle="Nature"

          />



          <CollectionCard

            image={collection3}

            title="Hidden Gems"

            subtitle="Explore"

          />

        </div>

      </section>







      <div className="py-12">

        <ForestDivider/>

      </div>







      {/* FOOD STORY */}





      <section

        className="

        relative

        min-h-screen

        bg-fixed

        bg-cover

        bg-center

        "

        style={{

          backgroundImage:

          "url('/jackfruit.jpg')"

        }}

      >



        <div className="absolute inset-0 bg-black/60"></div>





        <div

          className="

          relative

          z-10

          min-h-screen

          flex

          items-center

          max-w-6xl

          mx-auto

          px-8

          py-28

          "

        >



          <div>

            <p

              className="

              text-green-300

              uppercase

              tracking-[5px]

              font-semibold

              "

            >

              Taste Kerala

            </p>



            <h1

              className="

              text-5xl

              md:text-7xl

              font-bold

              text-white

              mt-6

              leading-tight

              "

            >

              More Than Food,

              <br />

              It's Tradition

            </h1>



            <p

              className="

              text-gray-200

              text-xl

              max-w-2xl

              mt-10

              leading-10

              "

            >

              Experience authentic dishes,

              traditional recipes and local flavours

              passed through generations.

            </p>



            <button

              className="

              mt-12

              px-8

              py-4

              rounded-full

              bg-gradient-to-r

              from-green-500

              to-green-700

              text-white

              font-semibold

              hover:scale-105

              transition

              "

            >

              Explore Food →

            </button>

          </div>

        </div>

      </section>







      <div className="py-12">

        <ForestDivider/>

      </div>







      {/* WHY ECOYATRA */}





      <section

        className="

        bg-[#F7FBF7]

        dark:bg-[#0F172A]

        py-36

        transition-all

        "

      >



        <div

          className="

          max-w-7xl

          mx-auto

          grid

          md:grid-cols-3

          gap-12

          px-6

          "

        >



          <div className="bg-white dark:bg-slate-800 p-12 rounded-[35px] shadow-xl">

            🌿

            <h2 className="text-3xl font-bold mt-6 dark:text-white">

              Eco Friendly

            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-300">

              Promoting sustainable tourism.

            </p>

          </div>



          <div className="bg-white dark:bg-slate-800 p-12 rounded-[35px] shadow-xl">

            🏡

            <h2 className="text-3xl font-bold mt-6 dark:text-white">

              Local Homestays

            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-300">

              Support local communities.

            </p>

          </div>



          <div className="bg-white dark:bg-slate-800 p-12 rounded-[35px] shadow-xl">

            ✨

            <h2 className="text-3xl font-bold mt-6 dark:text-white">

              Hidden Gems

            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-300">

              Discover less crowded destinations.

            </p>

          </div>

        </div>

      </section>



      <AirlinePartners />

      <Footer />

    </>

  );

};

export default Home;