
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: '10:00', value: 200 },
  { time: '11:00', value: 450 },
  { time: '12:00', value: 574 },
  { time: '13:00', value: 800 },
  { time: '14:00', value: 1000 },
  { time: '15:00', value: 700 },
  { time: '16:00', value: 500 },
  { time: '17:00', value: 300 },
  { time: '18:00', value: 450 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white shadow-md p-2 rounded-md">
        <p className="label font-bold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const StatisticsChart = () => {
  return (
    <div className="w-full rounded-2xl p-6  bg-white shadow-sm">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4 border-b-2 pb-4">
        <div>
          <h2 className="text-gray-500 text-sm font-medium">Statistics</h2>
          <p className="text-xl font-bold">Sec: 117</p>
        </div>
        <div >
          <h2 className="text-4xl font-bold">1,027</h2>
          <p className="flex gap-2 text-green-500 font-semibold text-md mt-1">
          <div className="bg-green-100 w-5 p-1 rounded-full "></div> 
            12.75%
         
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={170}>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(82, 78, 222, 1)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={true} horizontal={false} strokeDasharray="3 3" stroke="#E0E0E0" />
          <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fill: '#999', fontSize: 12 }} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Area
            type="bump"
            dataKey="value"
            stroke="#524ede"
            strokeWidth={2}
            fill="url(#colorValue)"
            activeDot={{ r: 6, fill: '#524ede', stroke: '#ffffff', strokeWidth: 2 }} // Active dot
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
