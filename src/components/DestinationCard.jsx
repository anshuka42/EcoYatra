import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

import { PiLeafFill } from "react-icons/pi";

const DestinationCard = ({
  img1,
  img2,
  img3,
  img4,
  title,
  state,
  rating,
}) => {

  const [liked, setLiked] = useState(false);

  return (

    <div

      className="

      relative

      bg-white

      dark:bg-slate-800

      rounded-[36px]

      overflow-hidden

      shadow-xl

      hover:-translate-y-3

      hover:shadow-2xl

      transition-all

      duration-500

      "

    >

      {/* Wishlist */}


      <button

        onClick={() => setLiked(!liked)}

        className="

        absolute

        top-6

        right-6

        z-20

        w-12

        h-12

        rounded-full

        bg-white/90

        dark:bg-slate-700

        backdrop-blur-md

        shadow-lg

        flex

        items-center

        justify-center

        hover:scale-110

        transition

        "

      >

        {

          liked

          ?

          <FaHeart className="text-red-500 text-xl"/>

          :

          <FaRegHeart className="text-red-500 text-xl"/>

        }

      </button>




      {/* Image Collage */}



      <div

      className="

      grid

      grid-cols-2

      h-[340px]

      overflow-hidden

      "

      >


        {[img1,img2,img3,img4].map((img,index)=>(

          <img

          key={index}

          src={img}

          alt=""

          className="

          w-full

          h-full

          object-cover

          hover:scale-110

          transition-all

          duration-700

          "

          />

        ))}

      </div>






      {/* Content */}





      <div className="p-9">



        {/* State */}



        <span

        className="

        inline-block

        px-5

        py-2

        rounded-full

        bg-green-100

        dark:bg-green-900

        text-green-700

        dark:text-green-200

        font-semibold

        "

        >

          {state}

        </span>






        {/* Title */}





        <h2

        className="

        text-4xl

        font-bold

        mt-7

        text-gray-800

        dark:text-white

        "

        >

          {title}

        </h2>







        {/* Rating */}





        <div

        className="

        flex

        items-center

        gap-3

        mt-6

        "

        >

          <FaStar className="text-yellow-500"/>

          <span

          className="

          font-semibold

          text-gray-700

          dark:text-gray-300

          "

          >

            {rating}

          </span>

        </div>







        {/* Explore Button */}





        <button

        className="

        mt-10

        px-8

        py-4

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

        shadow-xl

        hover:scale-105

        hover:shadow-2xl

        transition-all

        duration-300

        "

        >

          <PiLeafFill size={20}/>

          Explore

        </button>



      </div>


    </div>

  );

};

export default DestinationCard;