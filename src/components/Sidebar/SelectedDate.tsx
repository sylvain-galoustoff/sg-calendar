import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMonthFromParams } from "../../utils/dates";
import { format } from "date-fns";

function SelectedDate() {
  const params = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    setSelectedDate(getMonthFromParams(params));
  }, [params]);

  return (
    <div className="cell big bold" id="selected-date">
      <span>{selectedDate && format(selectedDate, "EEEE d MMMM yyyy")}</span>
    </div>
  );
}

export default SelectedDate;
