import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  Cell,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 40,
  },
  {
    name: "Page B",
    pv: 60,
  },
  {
    name: "Page C",
    pv: 90,
  },
  {
    name: "Page D",
    pv: 75,
  },
  {
    name: "Page E",
    pv: 60,
  },
  {
    name: "Page F",
    pv: 40,
  },
  {
    name: "Page G",
    pv: 20,
  },
];
const colors = ["#fff", "#fff", "#7467F0", "#fff", "#fff", "#fff", "#fff"];
const pieCharts = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
];
const COLORS = [
  "#e95456", "#e5545a", "#e2555e", "#df5562", "#dc5666", "#d9566a",
  "#d6576e", "#d35772", "#d05877", "#cd587b", "#ca597f", "#c65983",
  "#c35a87", "#c05a8b", "#bd5b8f", "#ba5c94", "#b75c98", "#b45d9c",
  "#b15da0", "#ae5ea4", "#ab5ea8", "#a75fac", "#a45fb0", "#a160b5",
  "#9e60b9", "#9b61bd", "#9861c1", "#9562c5", "#9262c9", "#8f63cd", "#8c64d2"
];

const MiddleSessionAndTicket = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="shadow-navbar ">
        <div className="bg-neutral-100 dark:bg-contentBgColor shadow-navbar rounded-md px-4 py-2">
          {/* select and avg sessions */}
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold">2.7K</p>
              <p className="text-[10px] md:-mt-1">Avg Sessions</p>
              <p className="text-[10px] md:pt-1">+5.2% vs last 7 days</p>
            </div>
            <select
              name="select"
              id="select"
              className="bg-neutral-100 dark:bg-contentBgColor h-5 text-xs outline-none "
            >
              <option value="seven">Last 7 days</option>
              <option value="fourteen">Last 14 days</option>
              <option value="twenty-one">Last 21 days</option>
            </select>
          </div>
          {/* button and chart */}
          <div className="flex flex-col-reverse lg:flex-row gap-3 py-3 ">
            <div className="w-full flex flex-col justify-end">
              <button className="py-1.5 w-full bg-[#7467F0] rounded">
                View Details
              </button>
            </div>
            <div className="w-full h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Tooltip />
                  <Bar
                    dataKey="pv"
                    fill="#8884d8"
                    radius={[10, 10, 0, 0]}
                    barSize={20}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* divider */}
          <div className="border border-[#6B6B6B] my-2 "></div>
          {/* progress bar */}
          <div className="flex flex-col md:flex-row justify-between gap-3 py-3">
            <div className="w-full">
              {/* users */}
              <div>
                <p>Goal: $1000000</p>
                <div className="bg-white rounded-full mt-1.5">
                  <div className="bg-[#7467F0] w-36 rounded-full py-0.5"></div>
                </div>
              </div>
              {/* retention */}
              <div className="mt-2">
                <p>Retention: 90%</p>
                <div className="bg-white rounded-full mt-1.5">
                  <div className="bg-[#EA5455] w-36 rounded-full py-0.5"></div>
                </div>
              </div>
            </div>
            <div className="w-full">
              {/* users */}
              <div>
                <p>Users: 100K</p>
                <div className="bg-white rounded-full mt-1.5">
                  <div className="bg-[#FF9F43] w-36 rounded-full py-0.5"></div>
                </div>
              </div>
              {/* duration */}
              <div className="mt-2">
                <p>Duration: 1yr</p>
                <div className="bg-white rounded-full mt-1.5">
                  <div className="bg-[#28C76F] w-36 rounded-full py-0.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 dark:bg-contentBgColor shadow-navbar rounded-md px-4 py-2">
        {/* select and session */}
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">Support Tracker</p>
            <p className="flex flex-col justify-center items-center">
              <span className="text-xl font-semibold">163</span>
              <span className="text-xs">Tickets</span>
            </p>
          </div>
          <select
            name="select"
            id="select"
            className="bg-neutral-100 dark:bg-contentBgColor h-5 text-xs outline-none "
          >
            <option value="seven">Last 7 days</option>
            <option value="fourteen">Last 14 days</option>
            <option value="twenty-one">Last 21 days</option>
          </select>
        </div>
        {/* speed ticket/ pie chart */}
        <div className="py-3 flex justify-center items-center -mt-24 lg:-mt-28 ">
          <div className="w-[250px] md:w-[250px] xl:w-[250px] h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieCharts}
                  cx={120}
                  cy={200}
                  innerRadius={80}
                  startAngle={0}
                  endAngle={270}
                  outerRadius={95}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieCharts.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="-mt-28">
              <p className="flex flex-col justify-start items-center">
                <span className="text-xs">Completed Tickets</span>
                <span className="text-xl font-semibold">83%</span>
              </p>
            </div>
          </div>
        </div>
        {/* ticket details */}
        <div className="flex justify-between gap-3 py-3">
          <p className="flex flex-col justify-start items-center">
            <span className="text-xs">New Tickets</span>
            <span className="text-xl font-semibold">29</span>
          </p>
          <p className="flex flex-col justify-center items-center">
            <span className="text-xs">Open Tickets</span>
            <span className="text-xl font-semibold">63</span>
          </p>
          <p className="flex flex-col justify-end items-center">
            <span className="text-xs">Response Time</span>
            <span className="text-xl font-semibold">1d</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSessionAndTicket;
