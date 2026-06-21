const Toast = ({message}) => {

  return (

    <div className="

    fixed

    top-6

    right-6

    px-6

    py-4

    rounded-2xl

    bg-green-600

    text-white

    shadow-xl

    z-50

    ">

      {message}

    </div>

  );

};

export default Toast;