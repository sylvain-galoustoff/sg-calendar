import { IoAddCircle, IoClose, IoCheckmark } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";

function AddEvent() {
  return (
    <div id="add-event">
      <button type="button" className="flat cell" id="add-event-button">
        <IoAddCircle /> Ajouter un événement
      </button>
      <form id="add-event-form">
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
          <ButtonIcon icon={<IoClose />} />
          <ButtonIcon classNames="primary" icon={<IoCheckmark />} />
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
