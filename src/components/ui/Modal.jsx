import { FaTimes } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}) => {

  if (!isOpen) return null;

  return (

    <div className="

    fixed

    inset-0

    bg-black/60

    flex

    justify-center

    items-center

    z-50

    ">

      <div className="

      bg-white

      dark:bg-slate-800

      rounded-[30px]

      p-8

      w-[90%]

      max-w-lg

      ">

        <div className="

        flex

        justify-between

        items-center

        mb-6

        ">

          <h2 className="

          text-2xl

          font-bold

          dark:text-white

          ">

            {title}

          </h2>



          <button onClick={onClose}>

            <FaTimes/>

          </button>

        </div>



        {children}

      </div>

    </div>

  );

};

export default Modal;