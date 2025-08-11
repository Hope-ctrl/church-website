import { useState } from "react";

const Events = () => {
    const today = new Date();
    const Month = today.toLocaleString("en-US", {month: "long"});
    const [month, setMonth] = useState(Month);

  const events = [
    {
      id: 1,
      date: "April 9, 2019 @ 8:00 am - April 9, 2022 @ 5:00 pm",
      title: "Latest Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem.",
      day: "9",
      fullMonth: "january",
      month: "JAN",
      year: "2019",
    },
    {
      id: 1,
      date: "august 29th - 31st 2025",
      title: "Youth Conference",
      description:
        "theme: Go in thy might",
      day: "9",
      fullMonth: "february",
      month: "FEB",
      year: "2022",
    },
     {
      id: 1,
      date: "august 29th - 31st 2025",
      title: "Youth Conference",
      description:
        "theme: Go in thy might",
      day: "9",
      fullMonth: "february",
      month: "FEB",
      year: "2025",
    },
    {
      id: 1,
      date: "august 29th - 31st 2025",
      title: "Youth Conference",
      description:
        "theme: Go in thy might",
      day: "9",
      fullMonth: "March",
      month: "MAR",
      year: "2025",
    },
    {
      id: 1,
      date: "august 29th - 31st 2025",
      title: "Youth Conference",
      description:
        "theme: Go in thy might",
      day: "9",
      fullMonth: "april",
      month: "APR",
      year: "2025",
    },
  ];
  
  const filteredEvents = events.filter(item => item.fullMonth.toLowerCase() == month.toLowerCase());



  return (
    <div className="container mx-auto px-4 py-6">

      {/* Month & No Events Message */}
          <div className="mt-6">
      <label className="block text-xl font-bold mb-4">
        Select Month
        </label>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

      <p className="mt-2">Selected: {month}</p>
    </div>

      {/* Past Events */}
      {
        filteredEvents.length == 0 ? 
        <div className="bg-[#d1d1d1] h-[100px] flex justify-center items-center mt-[100px]">
            <p className="font-bold capitalize">
            no events in {month}
            </p>
        </div> 
        :
        <div className="mt-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row border-b py-6 gap-6"
          >
            {/* Date */}
            <div className="text-center md:w-1/6">
              <p className="text-lg font-bold">{event.month}</p>
              <p className="text-3xl font-bold">{event.day}</p>
              <p className="text-sm text-gray-500">{event.year}</p>
            </div>
            {/* Details */}
            <div className="md:w-5/6">
              <p className="text-sm text-gray-500 mb-1 capitalize">{event.date}</p>
              <h4 className="text-xl font-bold mb-2 capitalize">{event.title}</h4>
              <p className="text-gray-700 capitalize">{event.description}</p>
            </div>
          </div>
        ))}
      </div> 
      }
    </div>
  );
};

export default Events;
