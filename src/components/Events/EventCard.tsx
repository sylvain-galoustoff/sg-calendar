import { EventType } from "../../@types/types";
import ButtonIcon from "../common/ButtonIcon";
import { IoTrash, IoPencil } from "react-icons/io5";

type EventCardType = {
  data: EventType;
};

function EventCard({ data }: EventCardType) {
  return (
    <div className="event-card">
      <div className="event-actions">
        <ButtonIcon icon={<IoPencil />} classNames="text" />
        <ButtonIcon icon={<IoTrash />} classNames="text" />
      </div>
      <div className="event-content">
        <div className="event-card-header">
          <h2 className="event-name big bold">{data.eventName}</h2>
          <div className="event-data bold">
            <p className="event-agenda">{data.agenda}</p>
            <p className="event-time">{data.time}</p>
          </div>
        </div>
        <div className="event-note">{data.note}</div>
      </div>
    </div>
  );
}

export default EventCard;
