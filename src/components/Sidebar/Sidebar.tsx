import AddEventForm from "../Events/AddEventForm";
import AddEventToggle from "../Events/AddEventToggle";
import EventCard from "../Events/EventCard";
import SelectedDate from "./SelectedDate";

function Sidebar() {
  return (
    <div id="sidebar">
      <SelectedDate />
      <AddEventToggle />
      <AddEventForm />
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
