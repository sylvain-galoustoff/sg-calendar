import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Sidebar from "./Sidebar/Sidebar";
import UserBar from "./UserBar";

function App() {
  return (
    <div id="app">
      <UserBar />
      <div id="app-content">
        <Routes>
          <Route path="*" element={<Calendar />} />
          <Route path="/:year/:month" element={<Calendar />} />
        </Routes>
        <div id="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
