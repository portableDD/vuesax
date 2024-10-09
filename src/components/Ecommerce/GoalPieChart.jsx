import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const inner = [
  { name: "Group A", value: 400, color: "#C9CED4" },
  { name: "Group B", value: 400, color: "none" },
];
const middle = [
  { name: "A1", value: 600 },
  { name: "A2", value: 300 },
];

const GoalPieChart = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center item-center mx-auto my-5">
        <div className="w-52 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient
                  id="pie-stroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00DB89" stopOpacity={1} />
                  <stop offset="100%" stopColor="#00BEAA" stopOpacity={1} />
                </linearGradient>
              </defs>
              {/* inner */}
              <Pie
                data={inner}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={360}
                endAngle={270}
                innerRadius={75}
                outerRadius={80}
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
                startAngle={0}
                endAngle={240}
                innerRadius={75}
                outerRadius={80}
                fill="url(#pie-stroke)"
                stroke="none"
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="-mt-32 font-semibold">
            <p className="flex flex-col justify-start items-center text-3xl">
              83%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalPieChart;
