import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps
} from 'recharts';

interface DataItem {
  name: string;
  [key: string]: number | string;
}

interface EmailAlertProps {
  data: DataItem[];
  barDataKey: string;
  tooltipContent?: (label: string) => string;
}

const defaultTooltipContent = (label: string) => {
  // Default tooltip content if not provided
  return `Information about ${label}`;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border rounded">
        <p className="label text-gray-800">{`${label} : ${payload[0].value}`}</p>
        <p className="intro text-gray-600">{defaultTooltipContent(label)}</p>
      </div>
    );
  }

  return null;
};

const EmailAlert: React.FC<EmailAlertProps> = ({ data, barDataKey, tooltipContent }) => {
  return (
    <div className="bg-white rounded-2xl border-2  w-full">
    
      <div className="flex items-center mb-1 ml-4 p-4">
        <h2 className="text-md font-semibold text-gray-700">Email Alert</h2>
      </div>

    <ResponsiveContainer width="100%" height={170} className={"bg-white rounded-2xl  pr-4"}> 
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid  vertical={false} horizontal={true}  strokeDasharray="0 1 " />
        <XAxis dataKey="name" />
        <YAxis axisLine={false}  tickLine={false}  ticks={[0, 10, 20, 30]} />
        
        <Tooltip content={tooltipContent ? ({ label }) => <div className="custom-tooltip bg-white p-2 border rounded">
          <p className="label text-gray-800">{`${label} : ${data.find(item => item.name === label)?.[barDataKey]}`}</p>
          <p className="intro text-gray-600">{tooltipContent(label)}</p>
        </div> : <CustomTooltip />} />
        
        {/* <Bar dataKey={barDataKey} barSize={20} fill="#8884d8" /> */}
        <Bar dataKey="uv" barSize={20}   stackId="a" fill="#A8C5DA" />
        <Bar dataKey="pv" barSize={20}  radius={3} stackId="a" fill="#cde6f7" />
      </BarChart>
    </ResponsiveContainer>

    </div>
  );
};

export default EmailAlert;
