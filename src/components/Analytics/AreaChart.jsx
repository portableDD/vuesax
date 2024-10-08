/* eslint-disable react/prop-types */
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const AreaChartComp = ({
  id,
  data,
  dataKey,
  Icon,
  bgColor,
  iconColor,
  small,
  bold,
  stopColor2,
  stopColor1,
  stroke,
}) => {
  return (
    <div>
      <div className="px-5 py-3 flex flex-col justify-start font-semibold gap-3">
        <div
          className="w-10 h-10 rounded-full  flex justify-center items-center"
          style={{ backgroundColor: bgColor }}
        >
          <Icon className="text-xl" style={{ color: iconColor }} />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xl">{bold}</p>
          <p className="text-[10px]">{small}</p>
        </div>
      </div>
      <div style={{ width: "100%", height: "100px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor={stopColor1} stopOpacity={0.8} />
                <stop offset="95%" stopColor={stopColor2} stopOpacity={1} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              fillOpacity={1}
              fill={`url(#${id})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartComp;
