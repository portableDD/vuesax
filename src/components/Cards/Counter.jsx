import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(8);
  const add = () => {
    const newCount = count < 20 ? count + 1 : count;
    setCount(newCount);
  };
  const reduce = () => {
    const newCount = count > 0 ? count - 1 : count;
    setCount(newCount);
  };
  return (
    <div className="flex items-center mt-1">
      <button onClick={reduce} className="bg-[#6F64F8] rounded px-2 py-1">-</button>
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
