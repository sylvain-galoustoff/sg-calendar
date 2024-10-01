import { IoAddCircle } from "react-icons/io5";

type AddEventToggleProps = {
  toggleForm: () => void;
};

function AddEventToggle({ toggleForm }: AddEventToggleProps) {
  return (
    <button
      type="button"
      className="flat cell"
      id="add-event-button"
      onClick={toggleForm}
    >
      <IoAddCircle /> Ajouter un événement
    </button>
  );
}

export default AddEventToggle;
