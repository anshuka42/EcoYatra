const Card = ({ image, title, state, description }) => {

  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <img

        src={image}

        alt={title}

        className="w-full h-52 object-cover"

      />



      <div className="p-5">

        <p className="text-sm text-green-700 font-semibold">

          {state}

        </p>


        <h2 className="text-2xl font-bold mt-2">

          {title}

        </h2>


        <p className="text-gray-600 mt-3">

          {description}

        </p>


        <button

          className="mt-5 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"

        >

          Explore

        </button>

      </div>

    </div>

  );

};

export default Card;