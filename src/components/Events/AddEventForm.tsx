import { IoClose, IoCheckmark } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";

type AddEventProps = {
  isOpen: boolean;
};

function AddEvent({ isOpen }: AddEventProps) {
  return (
    <form id="add-event-form" className={isOpen ? "open" : "not-open"}>
      <div className="form-group">
        <label className="sr-only" htmlFor="event-name">
          Nom de l'événement
        </label>
        <input type="text" id="event-name" placeholder="Nom de l'événement" />
      </div>
      <div className="inline-group">
        <div className="form-group" id="agenda-group">
          <label className="sr-only" htmlFor="event-agenda">
            Choix de l'agenda
          </label>
          <select id="event-agenda">
            <option value="sacha">Sacha</option>
            <option value="charly">Charly</option>
            <option value="julie">Julie</option>
            <option value="sylvain">Sylvain</option>
          </select>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="event-time">
            Choix de l'agenda
          </label>
          <input type="time" id="event-time" />
        </div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="event-note">
          Description (facultatif)
        </label>
        <textarea id="event-note" placeholder="Description (facultatif)" />
      </div>
      <div className="button-group">
        <ButtonIcon classNames="ghost" icon={<IoClose />} />
        <ButtonIcon classNames="primary" icon={<IoCheckmark />} />
      </div>
    </form>
  );
}

export default AddEvent;
