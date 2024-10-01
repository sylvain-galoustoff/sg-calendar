import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type CellProps = {
  day: number;
  today: Date;
};

function Cell({ day, today }: CellProps) {
  const params = useParams();
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    let cellDate = new Date(Number(params.year), Number(params.month) - 1, day);

    if (today.getTime() === cellDate.getTime()) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  }, [params, day]);

  return (
    <div className={`cell ${isToday ? "today" : "not-today"}`}>
      <div className="cell-content">
        <div className="span cell-value">{day}</div>
      </div>
    </div>
  );
}

export default Cell;
