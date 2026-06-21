const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {

  const variants = {

    primary:
      "bg-gradient-to-r from-green-500 to-green-700 text-white",

    outline:
      "border border-green-500 text-green-600 bg-transparent",

    danger:
      "bg-red-500 text-white",

  };



  return (

    <button

      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`

      px-7

      py-3

      rounded-full

      font-semibold

      shadow-lg

      transition-all

      hover:scale-105

      disabled:opacity-50

      ${variants[variant]}

      `}

    >

      {children}

    </button>

  );

};

export default Button;