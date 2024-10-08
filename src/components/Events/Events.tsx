import { useState } from "react";
import AddEventToggle from "./AddEventToggle";
import AddEventForm from "./AddEventForm";
import EventCard from "./EventCard";

function Events() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <AddEventToggle toggleForm={toggleForm} />
      <AddEventForm isOpen={showForm} setIsOpen={toggleForm} />
      <div id="events-list">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}

export default Events;
