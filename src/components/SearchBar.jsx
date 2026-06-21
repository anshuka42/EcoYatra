import { FaPlaneDeparture } from "react-icons/fa";
import { PiLeafFill } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";

const SearchBar = () => {

  const { darkMode } = useTheme();

  return (

    <div

      className="

      max-w-7xl

      mx-auto

      px-6

      md:px-10

      -mt-12

      relative

      z-20

      "

    >



      <div

        className="

        grid

        grid-cols-1

        md:grid-cols-2

        lg:grid-cols-5

        gap-8

        p-8

        md:p-10

        rounded-[40px]

        backdrop-blur-2xl

        bg-white/85

        dark:bg-slate-900/80

        shadow-[0_20px_80px_rgba(0,0,0,0.15)]

        dark:shadow-black/40

        transition-all

        duration-500

        "

      >



        {/* FROM */}



        <div>

          <p

          className="

          text-sm

          text-gray-500

          dark:text-gray-400

          mb-3

          "

          >

            From

          </p>



          <input

            type="text"

            placeholder="Delhi"

            className="

            w-full

            bg-transparent

            outline-none

            text-xl

            font-semibold

            text-gray-800

            dark:text-white

            "

          />

        </div>





        {/* DESTINATION */}




        <div className="relative">


          <FaPlaneDeparture

          className="

          absolute

          -top-4

          right-0

          text-sky-500

          text-2xl

          animate-bounce

          "

          />


          <p

          className="

          text-sm

          text-gray-500

          dark:text-gray-400

          mb-3

          "

          >

            Destination

          </p>



          <input

            type="text"

            placeholder="Munnar"

            className="

            w-full

            bg-transparent

            outline-none

            text-xl

            font-semibold

            text-gray-800

            dark:text-white

            "

          />

        </div>





        {/* Budget */}




        <div>

          <p

          className="

          text-sm

          text-gray-500

          dark:text-gray-400

          mb-3

          "

          >

            Budget

          </p>



          <input

            type="text"

            placeholder="₹15,000"

            className="

            w-full

            bg-transparent

            outline-none

            text-xl

            font-semibold

            text-gray-800

            dark:text-white

            "

          />

        </div>






        {/* Days */}





        <div>

          <p

          className="

          text-sm

          text-gray-500

          dark:text-gray-400

          mb-3

          "

          >

            Days

          </p>



          <input

            type="text"

            placeholder="3 Days"

            className="

            w-full

            bg-transparent

            outline-none

            text-xl

            font-semibold

            text-gray-800

            dark:text-white

            "

          />

        </div>






        {/* Button */}





        <button

          className="

          rounded-full

          px-8

          py-5

          bg-gradient-to-r

          from-green-500

          via-green-600

          to-emerald-700

          text-white

          flex

          items-center

          justify-center

          gap-3

          text-lg

          font-semibold

          shadow-xl

          hover:scale-105

          transition-all

          duration-300

          "

        >

          <PiLeafFill size={22}/>

          Explore

        </button>


      </div>



    </div>

  );

};

export default SearchBar;