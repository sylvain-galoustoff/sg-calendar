import { useEffect, useState, KeyboardEvent } from "react";
import { useParams } from "react-router-dom";
import { useDateContext } from "../../context/DateContext";

type CellProps = {
  day: number;
  today: Date;
};

function Cell({ day, today }: CellProps) {
  const params = useParams();
  const { date, setDate } = useDateContext();
  const [isToday, setIsToday] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

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
  }, [params, day, date]);

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
      className={`cell ${isToday ? "today" : "not-today"} ${
        isSelected ? "selected" : "not-selected"
      }`}
      tabIndex={0}
      onClick={setSelectedDate}
      onKeyDown={selectDateByKey}
    >
      <div className="cell-content">
        <div className="span cell-value">{day}</div>
      </div>
    </div>
  );
}

export default Cell;
