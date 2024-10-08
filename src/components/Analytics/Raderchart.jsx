import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const radarData = [
  {
    month: "Jan",
    SalesA: 110,
    SalesB: 90,
  },
  {
    month: "Feb",
    SalesA: 50,
    SalesB: 90,
  },
  {
    month: "Mar",
    SalesA: 110,
    SalesB: 90,
  },
  {
    month: "Apr",
    SalesA: 50,
    SalesB: 90,
  },
  {
    month: "May",
    SalesA: 120,
    SalesB: 0,
  },
  {
    month: "Jun",
    SalesA: 20,
    SalesB: 90,
  },
];

const Raderchart = () => {
  return (
    <div className="w-full text-xs">
      <div className="w-full h-[300px] flex justify-center item-center mx-auto text-xs">
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" data={radarData}>
            <Legend verticalAlign="top" align="left" height={50} />
            <PolarGrid strokeOpacity={0.1} />
            <PolarAngleAxis dataKey="month" />
            <Radar name="Sales" dataKey="SalesA" stroke="none" fill="#9794D7" />
            <Radar name="Sales" dataKey="SalesB" stroke="none" fill="#21CFD3" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Raderchart;
