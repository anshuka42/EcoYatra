import { FaArrowRight } from "react-icons/fa";

const CollectionCard = ({
  image,
  title,
  subtitle,
}) => {

  return (

    <div

      className="

      relative

      h-[450px]

      rounded-[35px]

      overflow-hidden

      group

      cursor-pointer

      "

    >


      <img

        src={image}

        alt=""

        className="

        w-full

        h-full

        object-cover

        group-hover:scale-110

        transition-all

        duration-700

        "

      />


      {/* Overlay */}


      <div

        className="

        absolute

        inset-0

        bg-gradient-to-t

        from-black/80

        via-black/20

        to-transparent

        "

      ></div>


      {/* Content */}



      <div

        className="

        absolute

        bottom-8

        left-8

        text-white

        "

      >

        <p

          className="

          uppercase

          tracking-[3px]

          text-sm

          "

        >

          {subtitle}

        </p>



        <h1

          className="

          text-4xl

          font-bold

          mt-3

          "

        >

          {title}

        </h1>



        <button

          className="

          mt-6

          px-6

          py-3

          rounded-full

          bg-white/20

          backdrop-blur-md

          flex

          items-center

          gap-3

          hover:bg-white/30

          transition

          "

        >

          Explore

          <FaArrowRight/>

        </button>

      </div>


    </div>

  )

}

export default CollectionCard;