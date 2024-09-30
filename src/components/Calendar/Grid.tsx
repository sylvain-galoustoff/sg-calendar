import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDateFromParams } from "../../utils/dates";
import { getDaysInMonth, startOfMonth, endOfMonth } from "date-fns";
import Cell from "./Cell";
import EmptyCell from "./EmptyCell";

type ParamsType = {
  year?: string;
  month?: string;
};

function Grid() {
  const params = useParams<ParamsType>();
  const [numberOfDays, setnumberOfDays] = useState(0);
  const [numberOfOffsetDays, setNumberOfOffsetDays] = useState(0);
  const [numberOfFillerDays, setNumberOfFillerDays] = useState(0);

  useEffect(() => {
    const date = getDateFromParams(params);
    if (date) {
      const daysInMonth = getDaysInMonth(date);
      const firstDayOfMonth = startOfMonth(date);
      const lastDayOfMonth = endOfMonth(date);
      console.clear();
      console.log(lastDayOfMonth);
      console.log(lastDayOfMonth.getDay());

      setNumberOfOffsetDays(
        firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1
      );
      setnumberOfDays(daysInMonth);
      setNumberOfFillerDays(
        lastDayOfMonth.getDay() === 0 ? 0 : 7 - lastDayOfMonth.getDay()
      );
    }
  }, [params]);

  const renderOffset =
    numberOfOffsetDays !== 0 &&
    Array.from({ length: numberOfOffsetDays }, (_, index) => <EmptyCell key={index} />);

  const renderCells = Array.from({ length: numberOfDays }, (_, index) => (
    <Cell key={index} day={index + 1} />
  ));

  const rendernumberOfFillerDays = Array.from(
    { length: numberOfFillerDays },
    (_, index) => <EmptyCell key={index} />
  );

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
        {rendernumberOfFillerDays}
      </div>
    </div>
  );
}

export default Grid;
