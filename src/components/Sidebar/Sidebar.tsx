import AddEvent from "../Events/AddEvent";
import SelectedDate from "./SelectedDate";

function Sidebar() {
  return (
    <div id="sidebar">
      <SelectedDate />
      <AddEvent />
      <div id="events-list"></div>
    </div>
  );
}

export default Sidebar;
