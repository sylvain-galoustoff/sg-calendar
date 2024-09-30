import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDateFromParams } from "../../utils/dates";
import { RouteParams } from "../../@types/types";
import { getDaysInMonth, startOfMonth, endOfMonth } from "date-fns";
import Cell from "./Cell";
import EmptyCell from "./EmptyCell";

function Grid() {
  const params = useParams<RouteParams>();
  const [numberOfCells, setNumberOfCells] = useState(0);
  const [offsetDays, setOffsetDays] = useState(0);
  const [fillers, setFillers] = useState(0);

  useEffect(() => {
    if (params.year && params.month) {
      const date = getDateFromParams({
        year: params.year,
        month: params.month,
      });
      const daysInMonth = getDaysInMonth(date);
      const startDay = startOfMonth(date).getDay();
      console.log(startDay);

      const endDay = endOfMonth(date).getDay();

      setOffsetDays(startDay - 1);
      setNumberOfCells(daysInMonth);
      setFillers(6 - endDay);
    }
  }, [params]);

  const renderOffset =
    offsetDays !== 0 &&
    Array.from({ length: offsetDays }, (_, index) => <EmptyCell key={index} />);

  const renderCells = Array.from({ length: numberOfCells }, (_, index) => (
    <Cell key={index} day={index + 1} />
  ));

  const renderFillers = Array.from({ length: fillers }, (_, index) => (
    <EmptyCell key={index} />
  ));

  return (
    <div id="grid-container">
      <div id="weekdays">
        <div className="bold cell weekday">Lun</div>
        <div className="bold cell weekday">Mar</div>
        <div className="bold cell weekday">Mer</div>
        <div className="bold cell weekday">Jeu</div>
        <div className="bold cell weekday">Ven</div>
        <div className="bold cell weekday">Sam</div>
        <div className="bold cell weekday">Dim</div>
      </div>
      <div id="grid">
        {renderOffset}
        {renderCells}
        {renderFillers}
      </div>
    </div>
  );
}

export default Grid;
