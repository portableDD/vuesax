import { FaArrowDown, FaArrowUp, FaRegCircle } from "react-icons/fa";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const outer = [
  { name: "A3", value: 100, color: "#EA6061" },
  { name: "A2", value: 500, color: "#FFA550" },
  { name: "A1", value: 800, color: "#7A62F9" },
];

const ProductPieChart = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between gap-10">
        {/* chart */}
        <div className="flex justify-center item-center mx-auto my-5">
          <div className="w-52 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* outer */}
                <Pie
                  data={outer}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={540}
                  innerRadius={60}
                  outerRadius={90}
                  stroke="none"
                >
                  {outer.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* legends */}
        <div className="text-xs">
          {/* Deskstop */}
          <div className="flex justify-between item-center py-0.5">
            {/* left */}
            <p>
              <FaRegCircle className="inline text-[#7A62F9]" />
              <span className="pl-1 align-middle">Dekstop - 58.6%</span>
            </p>
            {/* right */}
            <p>
              <span className="pr-1 align-middle">2%</span>
              <FaArrowUp className="inline text-[#28C76F]" />
            </p>
          </div>
          {/* Mobile */}
          <div className="flex justify-between item-center py-0.5">
            {/* left */}
            <p>
              <FaRegCircle className="inline text-[#FFA550]" />
              <span className="pl-1 align-middle">Mobile - 34.9%</span>
            </p>
            {/* right */}
            <p>
              <span className="pr-1 align-middle">8%</span>
              <FaArrowUp className="inline text-[#28C76F]" />
            </p>
          </div>
          {/* Tablet */}
          <div className="flex justify-between item-center py-0.5">
            {/* left */}
            <p>
              <FaRegCircle className="inline text-[#EA6061]" />
              <span className="pl-1 align-middle">Tablet - 6.5%</span>
            </p>
            {/* right */}
            <p>
              <span className="pr-1 align-middle">-5%</span>
              <FaArrowDown className="inline text-[#EA5455]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPieChart;
