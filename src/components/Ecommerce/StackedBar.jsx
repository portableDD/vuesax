import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import { ClientBarChart } from "./ChartsArrays";

const StackedBar = () => {
  return (
    <div className="mt-2">
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ClientBarChart}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis ticks={[-180, -90, 0, 90, 180, 270]} tickCount={6} />
            <Tooltip />
            <Legend verticalAlign="top" align="left" height={40} />
            <ReferenceLine y={0} />
            <Bar dataKey="New Clients" fill="#8A80F3" barSize={10} />
            <Bar dataKey="Retained Clients" fill="#EE7071" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBar;
