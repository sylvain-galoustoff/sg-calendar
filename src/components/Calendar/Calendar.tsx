import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DateSelect from "./DateSelect";
import Grid from "./Grid";
import { defineDateSlug } from "../../utils/dates";

function Calendar() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.month || !params.year) {
      const slug = defineDateSlug(new Date());
      navigate(slug);
    }
  }, [params]);
  return (
    <div id="calendar">
      <DateSelect />
      <Grid />
    </div>
  );
}

export default Calendar;
