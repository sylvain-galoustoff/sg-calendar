import { useEffect, useState, KeyboardEvent } from "react";
import { useParams } from "react-router-dom";
import { useDateContext } from "../../context/DateContext";
import { EventType } from "../../@types/types";

type CellProps = {
  day: number;
  today: Date;
  events: EventType[];
};

function Cell({ day, today, events }: CellProps) {
  const params = useParams();
  const { date, setDate } = useDateContext();
  const [isToday, setIsToday] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [hasEvent, setHasEvent] = useState(false);

  useEffect(() => {
    let cellDate = new Date(Number(params.year), Number(params.month) - 1, day);

    if (today.getTime() === cellDate.getTime()) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }

    if (date.getTime() === cellDate.getTime()) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }

    const dayEvents = events.filter((event) => event.date === cellDate.getTime());
    if (dayEvents.length > 0) {
      setHasEvent(true);
    }
  }, [params, day, date, events]);

  const setSelectedDate = () => {
    let cellDate = new Date(Number(params.year), Number(params.month) - 1, day);
    setDate(cellDate);
  };

  const selectDateByKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedDate();
    }
  };

  return (
    <div
      className={`cell not-empty ${isToday ? "today" : "not-today"} ${
        isSelected ? "selected" : "not-selected"
      }`}
      tabIndex={0}
      onClick={setSelectedDate}
      onKeyDown={selectDateByKey}
    >
      <div className="cell-content">
        <div className="span cell-value">{day}</div>
        {hasEvent && <div className="event-marker" />}
      </div>
    </div>
  );
}

export default Cell;
