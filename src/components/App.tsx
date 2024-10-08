import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Sidebar from "./Sidebar/Sidebar";
import UserBar from "./UserBar";
import { DateContextProvider } from "../context/DateContext";

function App() {
  return (
    <DateContextProvider>
      <div id="app">
        <UserBar />
        <div id="app-content">
          <Routes>
            <Route path="*" element={<Calendar />} />
            <Route path="/:year/:month" element={<Calendar />} />
          </Routes>
          <div id="sidebar">
            <Routes>
              <Route path="/:year/:month" element={<Sidebar />} />
            </Routes>
          </div>
        </div>
      </div>
    </DateContextProvider>
  );
}

export default App;
