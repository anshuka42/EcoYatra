import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

import { PiLeafFill } from "react-icons/pi";

const Footer = () => {

  return (

    <footer className="

    relative

    bg-gradient-to-b

    from-[#0F3D2E]

    to-[#071E16]

    text-white

    overflow-hidden

    ">

      {/* Decorative Leaves */}

      <PiLeafFill

      className="

      absolute

      top-10

      left-10

      text-green-400

      text-6xl

      opacity-20

      "

      />



      <PiLeafFill

      className="

      absolute

      bottom-10

      right-20

      text-green-500

      text-7xl

      opacity-20

      "

      />



      <div className="

      max-w-7xl

      mx-auto

      px-6

      py-20

      ">


        <div className="

        grid

        grid-cols-1

        md:grid-cols-4

        gap-12

        ">


          {/* Logo */}


          <div>

            <div className="

            flex

            items-center

            gap-3

            ">

              <div className="

              w-12

              h-12

              rounded-full

              bg-green-600

              flex

              items-center

              justify-center

              ">

                <PiLeafFill size={28}/>

              </div>



              <h1 className="

              text-3xl

              font-bold

              ">

                EcoYatra

              </h1>

            </div>



            <p className="

            mt-6

            text-gray-300

            leading-8

            ">

              Explore India responsibly.

              Hidden Gems.

              Local Experiences.

              Sustainable Journeys.

            </p>

          </div>



          {/* Explore */}


          <div>

            <h2 className="

            text-xl

            font-bold

            mb-6

            ">

              Explore

            </h2>


            <ul className="space-y-4">

              <li>Destinations</li>

              <li>Experiences</li>

              <li>Hidden Gems</li>

              <li>Food Stories</li>

            </ul>

          </div>




          {/* Support */}


          <div>

            <h2 className="

            text-xl

            font-bold

            mb-6

            ">

              Support

            </h2>


            <ul className="space-y-4">

              <li>About Us</li>

              <li>Contact</li>

              <li>Privacy Policy</li>

              <li>FAQ</li>

            </ul>

          </div>




          {/* Social */}



          <div>

            <h2 className="

            text-xl

            font-bold

            mb-6

            ">

              Follow Us

            </h2>



            <div className="

            flex

            gap-5

            text-2xl

            ">


              <FaInstagram

              className="

              hover:text-pink-400

              cursor-pointer

              "

              />



              <FaLinkedin

              className="

              hover:text-sky-400

              cursor-pointer

              "

              />



              <FaYoutube

              className="

              hover:text-red-400

              cursor-pointer

              "

              />



            </div>

          </div>


        </div>



        {/* Bottom */}



        <div className="

        border-t

        border-green-900

        mt-16

        pt-8

        text-center

        text-gray-400

        ">

          Made with

          <FaHeart className="

          inline

          text-red-500

          mx-2

          "/>

          for Nature Lovers 🌿


        </div>


      </div>

    </footer>

  )

}

export default Footer;