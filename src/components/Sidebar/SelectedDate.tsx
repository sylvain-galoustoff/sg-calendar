import { format } from "date-fns";
import { useDateContext } from "../../context/DateContext";

function SelectedDate() {
  const { date } = useDateContext();

  return (
    <div className="cell big bold" id="selected-date">
      <span>{format(date, "EEEE d MMMM yyyy, H:mm")}</span>
    </div>
  );
}

export default SelectedDate;
