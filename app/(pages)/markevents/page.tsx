"use client";

import ListWithP from "@/components/(AdminPanel)/ListOfDatawithPagination/ListWithP";
import Modal from "@/components/(AdminPanel)/modals/Modal";
import { useState } from "react";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  interface User {
    eventId: string;
    event: string;
    eventdate: string;
    city: string;
    venue: string;
    onsaledate: string;
    presaledate: string;
  }

  const users: User[] = [
    {
      eventId: "C11",
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: "2",
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: "3",
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: "4",
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
  ];

  return (
    <>
      <ListWithP
        columns={[
          { key: "eventId", label: "Event Id" },
          { key: "event", label: "Event" },
          { key: "venue", label: "Venue" },
          { key: "city", label: "City" },
          { key: "eventdate", label: "Event Date" },
          { key: "presaledate", label: "Presale Date" },
          { key: "onsaledate", label: "OnSale Date" },
        ]}
        data={users}
        bgColor="bg-slate-200"
      />
    </>
  );
};

export default page;
