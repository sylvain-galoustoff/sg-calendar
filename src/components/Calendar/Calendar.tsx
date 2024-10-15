import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DateSelect from "./DateSelect";
import Grid from "./Grid";
import { getDateSlug } from "../../utils/dates";
import { EventType } from "../../@types/types";

type CalendarProps = {
  events: EventType[];
};

function Calendar({ events }: CalendarProps) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.month || !params.year) {
      const slug = getDateSlug(new Date());
      navigate(slug);
    }
  }, [params]);

  return (
    <div id="calendar">
      <DateSelect />
      <Grid events={events} />
    </div>
  );
}

export default Calendar;
