"use client";
import ToggleSwitch from "@/components/(AdminPanel)/(Fields)/Switch_btn/Switchbtn";
import EmailAlert from "@/components/(AdminPanel)/EmailAlert_Chart/EmailAlert";
import PieChart from "@/components/(AdminPanel)/EmailAlert_Chart/PieChart";
import SimpleCard from "@/components/(AdminPanel)/(Card)/SimpleCard/SimpleCard";
import TopEvents from "@/components/(AdminPanel)/TopSellingEvents/TopEvents";
import Icons from "@/utiles/icons/icons";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
  const eventsData = [
    {
      Name: "ASOS Ridley High Waste",
      Venue: "Venue A",
      "26/7": 10,
      "25/7": 10,
      "24/7": 200,
    },
    {
      Name: "Another Event",
      Venue: "Venue B",
      "26/7": 5,
      "25/7": 8,
      "24/7": 150,
    },
    {
      Name: "Another Event",
      Venue: "Venue B",
      "26/7": 5,
      "25/7": 8,
      "24/7": 150,
    },
    {
      Name: "Another Event",
      Venue: "Venue B",
      "26/7": 5,
      "25/7": 8,
      "24/7": 150,
    },
    // Add more data as needed
  ];

  const columns = ["Name", "Venue", "26/7", "25/7", "24/7"];

  const data = [
    { name: "Fri", uv: 17, pv: 6, amt: 30 },
    { name: "Sat", uv: 20, pv: 8, amt: 40 },
    { name: "Sun", uv: 25, pv: 5, amt: 30 },
    { name: "Mon", uv: 25, pv: 3, amt: 20 },
    { name: "Tue", uv: 15, pv: 7, amt: 10 },
    { name: "Wed", uv: 10, pv: 8, amt: 10 },

    // Additional data items
  ];

  const tooltipContent = (label: string) => `Custom info for ${label}`;

  return (
    <div>
      <p className="font-bold pb-3 px-2">Dashboard</p>

      <div className="flex flex-wrap w-full">
        <div className="flex flex-wrap gap-4 w-[50%] ">
          <SimpleCard
            title="Total Events"
            value={3781}
            percentage="+5.27%"
            bgColor="#E3F5FF"
            icon2={<Icons icon="VectorTop" />}
          />

          <SimpleCard
            title="Sports"
            value={3219}
            percentage="+5.27%"
            icon={<Icons icon="listCheck" />}
            bgColor="#E3E3E3"
            icon2={<Icons icon="VectorTop" />}
          />

          <SimpleCard
            title="Theaters"
            value={3781}
            percentage="+5.27%"
            bgColor="white"
            icon2={<Icons icon="VectorTop" />}
          />
          <SimpleCard
            title="Concerts"
            value={4781}
            percentage="-0.27%"
            icon={<FaCalendarAlt />}
            bgColor="#E5ECF6"
            icon2={<Icons icon="VectorDown" />}
          />
        </div>

        <div className="flex flex-wrap  w-1/2 rounded-2xl ">
          <EmailAlert
            data={data}
            barDataKey="pv"
            tooltipContent={tooltipContent}
          />
        </div>
      </div>

      <div className="flex flex-wrap w-full mt-6 justify-between bottom-2 ">
        <div className="flex flex-wrap w-[72%] rounded-2xl border-2 overflow-hidden   ">
          <TopEvents
            title="Top Selling Event"
            columns={columns}
            data={eventsData}
            Width="w-full"
          />
        </div>
        <div className="flex flex-wrap w-1/4  bg-white rounded-3xl">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default page;
