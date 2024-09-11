import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // defs,
  // linearGradient,
  // stop,
} from "recharts";
import TabSwitch from '../(Fields)/Switch_btn/TabSwitchbtn';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 4800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 4000, pv: 300, amt: 2100 },
  { name: 'Aug', uv: 2490, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 2000, pv: 4300, amt: 2100 },
  { name: 'Nov', uv: 2490, pv: 4300, amt: 2100 },
  { name: 'Dec', uv: 1500, pv: 3300, amt: 9100 },
];

const formatYAxisTick = (tick: any) => {
  if (tick >= 1000) {
    return `${tick / 1000}k`;
  }
  return tick;
};



const InventoryChart = () => {
  return (
    <div className='w-full rounded-2xl p-8 mt-7 bg-white'>
      
      <div className=' flex justify-between'>

   
      <div style={{ marginBottom: '10px', paddingLeft: '10px' }}>
        <h2 className='text-gray-500 '>Total Count </h2>
        <p className='text-2xl font-bold'>2000  <span className='text-xs font-semibold text-green-600'>1.3% VS LAST Count</span></p>
        
      </div>
      <div>
      <TabSwitch leftLabel="hourly" rightLabel="Daily" bgColor=' bg-gray-900  text-white' />

      </div>

      </div>

      {/* The chart itself */}
      <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 0, 139, .8)" stopOpacity={1} />
            <stop offset="100%" stopColor="rgba(255, 255, 255, .1)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0 3" />
        <XAxis dataKey="name" axisLine={false}  tickLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false}  tickMargin={20} tickFormatter={formatYAxisTick}
/>
        <Tooltip active  contentStyle={{backgroundColor:"#1E1B39", color:"white" ,borderRadius:"10px"}} defaultIndex={8}/>
        <Area
          type="bump"
          dataKey="uv"
          stroke="#524ede"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
};

export default InventoryChart;
