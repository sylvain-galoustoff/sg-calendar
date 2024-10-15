import { EventType } from "../../@types/types";
import { deleteEvent } from "../../api/events";
import { useEditEventContext } from "../../context/EditEventContext";
import ButtonIcon from "../common/ButtonIcon";
import { IoTrash, IoPencil } from "react-icons/io5";

type EventCardType = {
  data: EventType;
  toggleForm: (status: boolean) => void;
};

function EventCard({ data, toggleForm }: EventCardType) {
  const { setEditForm } = useEditEventContext();

  const editEvent = () => {
    setEditForm(data);
    toggleForm(true);
  };

  const dropEvent = () => {
    deleteEvent(data.id);
  };

  return (
    <div className="event-card">
      <div className="event-actions">
        <ButtonIcon icon={<IoPencil />} classNames="text-light" onClick={editEvent} />
        <ButtonIcon icon={<IoTrash />} classNames="text-light" onClick={dropEvent} />
      </div>
      <div className="event-content">
        <div className="event-card-header">
          <h2 className="event-name big bold">{data.eventName}</h2>
          <p className="event-time">{data.time}</p>
        </div>
        <p className="event-agenda">{data.agenda}</p>
        <div className="event-note">{data.note}</div>
      </div>
    </div>
  );
}

export default EventCard;
