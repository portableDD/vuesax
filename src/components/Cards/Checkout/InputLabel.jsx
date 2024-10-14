const InputLabel = ({ title, type, id, onChange, value }) => {
  return (
    <div>
      <label htmlFor={type} className="block font-[750] ">
        {title}
      </label>
      <div className="pt-1">
        <input
          id={id}
          name="email"
          value={value}
          type={type}
          onChange={onChange}
          className="bg-inherit block w-full rounded-md border border-[#979797] py-2 px-3 focus:ring-[#979797] sm:text-sm sm:leading-6 "
        />
      </div>
    </div>
  );
};

export default InputLabel;
