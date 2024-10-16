import { FaRegCircle } from "react-icons/fa";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const inner = [
  { name: "Group B", value: 400, color: "#2B3253" },
  { name: "Group A", value: 400, color: "#EA6061" },
];
const middle = [
  { name: "A2", value: 300, color: "#2B3253" },
  { name: "A1", value: 600, color: "#FFA550" },
];
const outer = [
  { name: "A2", value: 200, color: "#2B3253" },
  { name: "A1", value: 800, color: "#7A62F9" },
];
const CircularChart = () => {
  return (
    <div className="w-full py-3">
      <div className="flex justify-center item-center mx-auto my-5">
        <div className="w-52 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* inner */}
              <Pie
                data={inner}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={540}
                innerRadius={40}
                outerRadius={50}
                stroke="none"
              >
                {inner.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* middle */}
              <Pie
                data={middle}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={540}
                innerRadius={60}
                outerRadius={70}
                stroke="none"
              >
                {middle.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* outer */}
              <Pie
                data={outer}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={540}
                innerRadius={80}
                outerRadius={90}
                stroke="none"
              >
                {outer.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="-mt-28">
            <p className="flex flex-col justify-start items-center">
              <span className=" font-semibold">Total</span>
              <span className="text-xs">42459</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs">
        {/* finished */}
        <div className="flex justify-between item-center py-0.5">
          <p>
            <FaRegCircle className="inline text-[#7A62F9]" />
            <span className="pl-1 align-middle">Finished</span>
          </p>
          <p>23043</p>
        </div>
        {/* pending */}
        <div className="flex justify-between item-center py-0.5">
          <p>
            <FaRegCircle className="inline text-[#FFA550]" />
            <span className="pl-1 align-middle">Pending</span>
          </p>
          <p>14658</p>
        </div>
        {/* rejected */}
        <div className="flex justify-between item-center py-0.5">
          <p>
            <FaRegCircle className="inline text-[#EA6061]" />
            <span className="pl-1 align-middle">Rejected</span>
          </p>
          <p>4758</p>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
