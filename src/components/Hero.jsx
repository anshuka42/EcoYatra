import heroVideo from "../assets/videos/hero.mp4";
import { PiLeafFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import FloatingLeaves from "./FloatingLeaves";

const Hero = () => {

  return (

    <section className="

    relative

    min-h-screen

    overflow-hidden

    ">


      {/* Video */}


      <video

      autoPlay

      muted

      loop

      playsInline

      className="

      absolute

      inset-0

      w-full

      h-full

      object-cover

      "

      >

        <source

        src={heroVideo}

        type="video/mp4"

        />

      </video>




      {/* Overlay */}



      <div

      className="

      absolute

      inset-0

      bg-gradient-to-r

      from-black/80

      via-black/55

      to-black/25

      dark:from-black/90

      dark:via-slate-900/80

      "

      />




      {/* Floating Leaves */}


      <FloatingLeaves/>





      {/* Main Content */}



      <div

      className="

      relative

      z-10

      min-h-screen

      flex

      items-center

      "

      >


        <div

        className="

        max-w-7xl

        mx-auto

        px-8

        md:px-14

        w-full

        "

        >




          <div className="max-w-3xl">



            <p

            className="

            text-green-300

            uppercase

            tracking-[6px]

            font-semibold

            text-sm

            md:text-base

            "

            >

              AI Powered Responsible Tourism

            </p>





            <h1

            className="

            text-5xl

            sm:text-6xl

            md:text-7xl

            lg:text-8xl

            font-bold

            text-white

            leading-[1.1]

            mt-8

            "

            >

              Explore India

              <br/>

              Responsibly

            </h1>





            <p

            className="

            text-gray-200

            dark:text-gray-300

            text-lg

            md:text-2xl

            leading-10

            mt-10

            max-w-2xl

            "

            >

              Hidden Gems •

              Sustainable Travel •

              Local Homestays •

              Food Experiences

            </p>






            {/* Buttons */}





            <div className="

            flex

            flex-col

            sm:flex-row

            gap-6

            mt-14

            ">





              <button

              className="

              px-9

              py-5

              rounded-full

              bg-gradient-to-r

              from-green-500

              via-green-600

              to-emerald-700

              text-white

              font-semibold

              flex

              items-center

              gap-3

              shadow-2xl

              hover:scale-105

              transition-all

              "

              >

                <PiLeafFill size={24}/>

                Plan My Journey

                <FaArrowRight/>

              </button>





              <button

              className="

              px-9

              py-5

              rounded-full

              backdrop-blur-lg

              bg-white/10

              border

              border-white/20

              text-white

              hover:bg-white/20

              transition

              "

              >

                Explore Destinations

              </button>



            </div>





          </div>


        </div>


      </div>


    </section>

  );

};

export default Hero;