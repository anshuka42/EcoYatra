import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { PiLeafFill } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleTheme } = useTheme();


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  return (

    <nav

      className={`

      fixed

      top-0

      left-0

      w-full

      z-50

      transition-all

      duration-500

      ${

        scrolled

        ?

        "backdrop-blur-xl bg-white/20 dark:bg-slate-900/70 shadow-lg"

        :

        "bg-transparent"

      }

      `}

    >


      <div

      className="

      max-w-7xl

      mx-auto

      px-8

      py-6

      flex

      justify-between

      items-center

      "

      >


        {/* LOGO */}


        <Link

        to="/"

        className="

        flex

        items-center

        gap-3

        "

        >

          <div

          className="

          w-12

          h-12

          rounded-full

          bg-gradient-to-r

          from-green-500

          to-emerald-700

          flex

          items-center

          justify-center

          shadow-xl

          "

          >

            <PiLeafFill

            className="text-white"

            size={26}

            />

          </div>



          <h1

          className="

          text-3xl

          font-bold

          text-white

          dark:text-white

          "

          >

            EcoYatra

          </h1>

        </Link>




        {/* Desktop Menu */}



        <div

        className="

        hidden

        lg:flex

        items-center

        gap-12

        "

        >

          <Link className="text-white hover:text-green-300">

            Home

          </Link>

          <Link className="text-white hover:text-green-300">

            Destinations

          </Link>

          <Link className="text-white hover:text-green-300">

            Experiences

          </Link>

          <Link className="text-white hover:text-green-300">

            Itinerary

          </Link>

          <Link className="text-white hover:text-green-300">

            About

          </Link>




          {/* Wishlist */}



          <button

          className="

          px-5

          py-3

          rounded-full

          backdrop-blur-md

          bg-white/10

          border

          border-white/20

          flex

          items-center

          gap-3

          text-white

          hover:scale-105

          transition

          "

          >

            <FaHeart/>

            Wishlist

          </button>




          {/* Dark Mode */}



          <button

          onClick={toggleTheme}

          className="

          w-11

          h-11

          rounded-full

          bg-white/10

          text-white

          backdrop-blur-md

          flex

          items-center

          justify-center

          "

          >

            {

              darkMode

              ?

              <FaSun/>

              :

              <FaMoon/>

            }

          </button>




          {/* Login */}



          <button

          className="

          px-7

          py-3

          rounded-full

          bg-gradient-to-r

          from-green-500

          via-green-600

          to-emerald-700

          text-white

          font-semibold

          shadow-lg

          hover:scale-105

          transition

          "

          >

            Login

          </button>


        </div>




        {/* Mobile */}



        <button

        className="

        lg:hidden

        text-white

        text-2xl

        "

        onClick={() => setMenuOpen(!menuOpen)}

        >

          {

            menuOpen

            ?

            <FaTimes/>

            :

            <FaBars/>

          }

        </button>


      </div>





      {/* Mobile Menu */}



      {

        menuOpen && (

          <div

          className="

          lg:hidden

          backdrop-blur-xl

          bg-black/70

          dark:bg-slate-900

          text-white

          flex

          flex-col

          gap-7

          p-8

          "

          >

            <Link>Home</Link>

            <Link>Destinations</Link>

            <Link>Experiences</Link>

            <Link>Itinerary</Link>

            <Link>About</Link>

            <Link>Wishlist</Link>

          </div>

        )

      }



    </nav>

  );

};

export default Navbar;