import { useState, useEffect } from "react";
import AddEventToggle from "./AddEventToggle";
import AddEventForm from "./AddEventForm";
import EventCard from "./EventCard";
import { EventType } from "../../@types/types";
import { useDateContext } from "../../context/DateContext";
import { EditEventContextProvider } from "../../context/EditEventContext";

type EventsProps = {
  events: EventType[];
};

function Events({ events }: EventsProps) {
  const { date } = useDateContext();
  const [showForm, setShowForm] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const selectedTimestamp = date.getTime();

    const filteredData = events.filter((event) => event.date === selectedTimestamp);
    setSelectedDateEvents(filteredData);
  }, [events, date]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const renderCards = selectedDateEvents.map((event) => (
    <EventCard key={event.id} data={event} toggleForm={toggleForm} />
  ));

  return (
    <EditEventContextProvider>
      <AddEventToggle toggleForm={toggleForm} />
      <AddEventForm isOpen={showForm} setIsOpen={toggleForm} />
      <div id="events-list">{renderCards}</div>
    </EditEventContextProvider>
  );
}

export default Events;
