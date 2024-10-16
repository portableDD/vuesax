

const Counter = ({ id, count, handleCountChange }) => {
  const add = () => {
    handleCountChange(id, count + 1);
  };

  const reduce = () => {
    if (count > 1) { // To ensure the count doesn't go below 1
      handleCountChange(id, count - 1);
    }
  };
  
  return (
    <div className="flex items-center mt-1">
      <button onClick={reduce} className="bg-[#6F64F8] rounded px-2 py-1">
        -
      </button>
      <h1 className="border border-[#EDEDED] py-0.5 px-2 text-[#2C2C2C] bg-white rounded ">
        {count}
      </h1>
      <button onClick={add} className="bg-[#6F64F8] rounded px-2 py-1">
        +
      </button>
    </div>
  );
};

export default Counter;
