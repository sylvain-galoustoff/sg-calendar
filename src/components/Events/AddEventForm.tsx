import { IoClose, IoCheckmark } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";
import { ChangeEvent, FormEvent, useState } from "react";
import { EventType } from "../../@types/types";
import { getTime } from "date-fns";
import storeEvent from "../../api/events";
import { getDateFromParams } from "../../utils/dates";
import { useParams } from "react-router-dom";

type AddEventProps = {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
};

function AddEvent({ isOpen, setIsOpen }: AddEventProps) {
  const params = useParams();
  const selectedDate = getDateFromParams(params);
  const emptyForm = {
    uid: "",
    date: getTime(selectedDate),
    eventName: "",
    id: "",
    note: "",
    time: "",
    agenda: null,
  };

  const [form, setForm] = useState<EventType>(emptyForm);

  const submitEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await storeEvent(form);
    if (response.success) {
      setIsOpen(false);
    } else {
      console.log(response);
    }
  };

  const updateForm = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <form
      id="add-event-form"
      className={isOpen ? "open" : "not-open"}
      onSubmit={submitEvent}
    >
      <div className="form-group">
        <label className="sr-only" htmlFor="event-name">
          Nom de l'événement
        </label>
        <input
          type="text"
          id="event-name"
          placeholder="Nom de l'événement"
          onChange={(e) => updateForm(e, "eventName")}
        />
      </div>
      <div className="inline-group">
        <div className="form-group" id="agenda-group">
          <label className="sr-only" htmlFor="event-agenda">
            Choix de l'agenda
          </label>
          <select id="event-agenda" onChange={(e) => updateForm(e, "agenda")}>
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
          <input type="time" id="event-time" onChange={(e) => updateForm(e, "time")} />
        </div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="event-note">
          Description (facultatif)
        </label>
        <textarea
          id="event-note"
          placeholder="Description (facultatif)"
          onChange={(e) => updateForm(e, "note")}
        />
      </div>
      <div className="button-group">
        <ButtonIcon classNames="ghost" icon={<IoClose />} />
        <ButtonIcon type="submit" classNames="primary" icon={<IoCheckmark />} />
      </div>
    </form>
  );
}

export default AddEvent;
