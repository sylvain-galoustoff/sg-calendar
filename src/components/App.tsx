import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Sidebar from "./Sidebar/Sidebar";
import UserBar from "./UserBar";
import { DateContextProvider } from "../context/DateContext";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { observeEvents } from "../api/events";
import { EventType } from "../@types/types";

function App() {
  const [events, setEvents] = useState<EventType[]>([]);

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

  return (
    <DateContextProvider>
      <div id="app">
        <UserBar />
        <div id="app-content">
          <Routes>
            <Route path="*" element={<Calendar />} />
            <Route path="/:year/:month" element={<Calendar events={events} />} />
          </Routes>
          <div id="sidebar">
            <Routes>
              <Route path="/:year/:month" element={<Sidebar events={events} />} />
            </Routes>
          </div>
        </div>
      </div>
    </DateContextProvider>
  );
}

export default App;
