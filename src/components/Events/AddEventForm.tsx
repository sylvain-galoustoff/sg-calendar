import { IoClose, IoCheckmark } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { EventType } from "../../@types/types";
import storeEvent from "../../api/events";
import { setTimestampZeroHour } from "../../utils/dates";
import { useDateContext } from "../../context/DateContext";

type AddEventProps = {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
  editForm?: EventType;
};

function AddEvent({ isOpen, setIsOpen, editForm }: AddEventProps) {
  const { date } = useDateContext();

  const emptyForm = {
    uid: "",
    date: setTimestampZeroHour(date),
    eventName: "",
    id: "",
    note: "",
    time: "",
    agenda: "default",
  };

  const [form, setForm] = useState<EventType>(editForm ? editForm : emptyForm);

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      date: setTimestampZeroHour(date),
    }));
  }, [date]);

  const submitEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await storeEvent(form);
    if (response.success) {
      setIsOpen(false);
      setForm(emptyForm);
    } else {
      console.error(response);
      alert(response.message);
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
          value={form.eventName}
        />
      </div>
      <div className="inline-group">
        <div className="form-group" id="agenda-group">
          <label className="sr-only" htmlFor="event-agenda">
            Choix de l'agenda
          </label>
          <select
            id="event-agenda"
            onChange={(e) => updateForm(e, "agenda")}
            value={form.agenda ? form.agenda : "default"}
          >
            <option value="default">Choisissez l'agenda concerné</option>
            <option value="sacha">Sacha</option>
            <option value="charly">Charly</option>
            <option value="julie">Julie</option>
            <option value="sylvain">Sylvain</option>
          </select>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="event-time">
            Horaire
          </label>
          <input
            type="time"
            id="event-time"
            onChange={(e) => updateForm(e, "time")}
            value={form.time}
          />
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
          value={form.note}
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
