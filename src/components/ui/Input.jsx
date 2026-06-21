const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {

  return (

    <div className="w-full">

      <label className="block mb-2 font-semibold">

        {label}

      </label>



      <input

        type={type}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        className="

        w-full

        px-5

        py-4

        rounded-2xl

        border

        border-gray-300

        dark:border-slate-700

        dark:bg-slate-800

        dark:text-white

        outline-none

        "

      />



      {

        error && (

          <p className="text-red-500 mt-2 text-sm">

            {error}

          </p>

        )

      }

    </div>

  );

};

export default Input;