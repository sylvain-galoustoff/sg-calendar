import { useState, useEffect } from "react";
import AddEventToggle from "./AddEventToggle";
import AddEventForm from "./AddEventForm";
import EventCard from "./EventCard";
import { EventType } from "../../@types/types";
import { observeEvents } from "../../api/events";
import { auth } from "../../firebase";
import { useDateContext } from "../../context/DateContext";

function Events() {
  const { date } = useDateContext();
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<EventType[]>([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState<EventType[]>([]);

  useEffect(() => {
    if (auth.currentUser) {
      const unsubscribeEvents = observeEvents(
        auth.currentUser.uid,
        (data: EventType[]) => {
          setEvents(data);
        }
      );
      return () => {
        unsubscribeEvents();
      };
    }
  }, []);

  useEffect(() => {
    const selectedTimestamp = date.getTime();

    const filteredData = events.filter((event) => event.date === selectedTimestamp);
    setSelectedDateEvents(filteredData);
  }, [events, date]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const renderCards = selectedDateEvents.map((event) => (
    <EventCard key={event.id} data={event} />
  ));

  return (
    <>
      <AddEventToggle toggleForm={toggleForm} />
      <AddEventForm isOpen={showForm} setIsOpen={toggleForm} />
      <div id="events-list">{renderCards}</div>
    </>
  );
}

export default Events;
