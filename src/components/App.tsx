import Calendar from "./Calendar/Calendar";
import Sidebar from "./Sidebar";
import UserBar from "./UserBar";

function App() {
  return (
    <div id="app">
      <UserBar />
      <div id="app-content">
        <Calendar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
