import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { RevenueLine } from "./ChartsArrays";



const LineChartComp = () => {
  return (
    <div className="mt-2">
      <div className="flex gap-2">
        <p className="flex flex-col gap-0.5">
          <span className="text-[10px]">This Month</span>
          <span className="text-[#28C76F] text-base font-semibold">
            $86,589
          </span>
        </p>
        <p className="flex flex-col gap-0.5">
          <span className="text-[10px]">Last Month</span>
          <span className="text-base font-semibold">$86,589</span>
        </p>
      </div>
      <div className="mt-5 w-full h-[250px]">
        <ResponsiveContainer>
          <LineChart data={RevenueLine}>
            <defs>
              <linearGradient
                id="gradient-stroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#7E72F2" stopOpacity={1} />
                <stop offset="100%" stopColor="#FA829E" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="int"
              tickLine={false}
              axisLine={false}
              padding={{ left: 30, right: 30 }}
            />
            <YAxis tickLine={false} domain={[44000, 49000]} tickCount={6} />
            <Tooltip />
            <Line
              type="bump"
              dataKey="pv"
              strokeWidth={3}
              stroke="url(#gradient-stroke)"
              fill="none"
            />
            <Line
              type="bump"
              dataKey="uv"
              strokeWidth={2}
              stroke="#BBC6CF"
              strokeDasharray="5 5"
              fill="none"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComp;
