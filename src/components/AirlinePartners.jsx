import { FaPlane } from "react-icons/fa";

const AirlinePartners = () => {

  const airlines = [

    "IndiGo",

    "Air India",

    "Vistara",

    "Akasa",

    "SpiceJet",

  ];


  return (

    <section

      className="

      py-32

      bg-[#F8FAF8]

      dark:bg-[#0F172A]

      transition-all

      duration-500

      overflow-hidden

      "

    >

      <div className="max-w-7xl mx-auto px-8">


        <h1

          className="

          text-5xl

          md:text-6xl

          font-bold

          text-center

          text-gray-800

          dark:text-white

          "

        >

          Trusted Travel Partners

        </h1>



        <p

          className="

          text-center

          text-gray-500

          dark:text-gray-400

          mt-6

          text-lg

          "

        >

          Travel with trusted airline partners

        </p>




        {/* Plane + Partners */}



        <div

          className="

          flex

          flex-col

          md:flex-row

          items-center

          justify-center

          gap-10

          mt-24

          "

        >



          <FaPlane

            className="

            text-sky-500

            text-5xl

            animate-bounce

            "

          />





          <div

            className="

            flex

            flex-wrap

            justify-center

            gap-8

            "

          >

            {

              airlines.map((airline,index)=>(

                <div

                  key={index}

                  className="

                  px-8

                  py-5

                  rounded-full

                  bg-white

                  dark:bg-slate-800

                  text-gray-800

                  dark:text-white

                  shadow-xl

                  hover:-translate-y-2

                  hover:shadow-2xl

                  transition-all

                  duration-300

                  "

                >

                  {airline}

                </div>

              ))

            }

          </div>


        </div>


      </div>

    </section>

  )

}

export default AirlinePartners;