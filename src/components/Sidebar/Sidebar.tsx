import { useState } from "react";
import AddEventForm from "../Events/AddEventForm";
import AddEventToggle from "../Events/AddEventToggle";
import EventCard from "../Events/EventCard";
import SelectedDate from "./SelectedDate";

function Sidebar() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="sidebar">
      <SelectedDate />
      <AddEventToggle toggleForm={toggleForm} />
      <AddEventForm isOpen={showForm} />
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
    </div>
  );
}

export default Sidebar;
