import AddEvent from "../Events/AddEvent";
import EventCard from "../Events/EventCard";
import SelectedDate from "./SelectedDate";

function Sidebar() {
  return (
    <div id="sidebar">
      <SelectedDate />
      <AddEvent />
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
