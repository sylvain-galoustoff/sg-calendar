import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";

function DateSelect() {
  return (
    <div className="big bold" id="date-select">
      <div className="cell" id="month-select">
        <ButtonIcon icon={<IoCaretBack />} id="previous-month" />
        <p className="month-value">Septembre</p>
        <ButtonIcon icon={<IoCaretForward />} id="next-month" />
      </div>
      <div className="cell" id="year-select">
        2024
      </div>
    </div>
  );
}

export default DateSelect;
