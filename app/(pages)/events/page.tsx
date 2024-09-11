import ListWithP from "@/components/(AdminPanel)/ListOfDatawithPagination/ListWithP";
import Icons from "@/utiles/icons/icons";

const page = () => {
  interface User {
    eventId: number;
    event: string;
    eventdate: string;
    city: string;
    venue: string;
    onsaledate: string;
    presaledate: string;
  }

  const users: User[] = [
    // Add more users as needed
    {
      eventId: 1,
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: 2,
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: 3,
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },
    {
      eventId: 4,
      event: "Katherine Moss",
      venue: "United Center",
      city: "New York",
      eventdate: "2024-11-08T19:30:00",
      presaledate: "2024-11-08T19:30:00",
      onsaledate: "2024-11-08T19:30:00",
    },

    // Additional dummy data...
  ];

  return (
    <>
      <div>
        <p className="ml-4">Events</p>

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
        />
      </div>
    </>
  );
};

export default page;
