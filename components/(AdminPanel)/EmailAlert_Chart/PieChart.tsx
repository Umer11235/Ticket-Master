import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Sports", value: 300, color: "#A3E1C3" },
  { name: "Theaters", value: 400, color: "#C5C6FF" },
  { name: "Concerts", value: 200, color: "#6B7280" },
];

// Chart component
const CustomPieChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border-2 w-full">
     
      <div className="flex items-center mb-1  p-4">
        <h2 className="text-md font-semibold text-gray-700">Top Events</h2>
    
      </div>
      <ResponsiveContainer width="100%" height={250} className={"bg-white rounded-2xl pr-4"}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="40%"
            innerRadius={50}
            outerRadius={70}
            startAngle={90}
            endAngle={450}
            paddingAngle={1} // Increased padding for better separation
            cornerRadius={5} // Increased corner radius for a more rounded effect
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ paddingTop: 10 }}
            formatter={(value, entry) => {
              if (entry && entry.payload) {
                return (
                  <span style={{ display: "inline-block", marginRight: 20 }}>
                    {value} {entry.payload.value}
                  </span>
                );
              }
              return value; // Fallback in case entry.payload is undefined
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
