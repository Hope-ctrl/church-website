
const Events = () => {
  const events = [
    {
      id: 1,
      date: "April 9, 2019 @ 8:00 am - April 9, 2022 @ 5:00 pm",
      title: "Latest Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem.",
      day: "9",
      month: "APR",
      year: "2019",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search & Controls */}
      <div className="w-full max-w-md mx-auto">
  {/* Search Box */}
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Search events..."
      className="w-full border border-gray-300 rounded-lg pl-4 pr-24 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="absolute right-1 top-1 bottom-1 bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-md">
      Find Event
    </button>
  </div>

</div>


      {/* Month & No Events Message */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">August 2025</h2>
        <div className="bg-gray-100 text-gray-600 text-center py-4 rounded">
          There are no upcoming events.
        </div>
      </div>

      {/* Past Events */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Latest Past Events</h3>
        {events.map((event) => (
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
              <p className="text-sm text-gray-500 mb-1">{event.date}</p>
              <h4 className="text-xl font-bold mb-2">{event.title}</h4>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
