import { IoCaretBack, IoCaretForward } from "react-icons/io5";

function DateSelect() {
  return (
    <div className="big bold" id="date-select">
      <div className="cell" id="month-select">
        <div className="button-icon text" id="previous-month">
          <IoCaretBack />
        </div>
        <p className="month-value">Septembre</p>
        <div className="button-icon text" id="next-month">
          <IoCaretForward />
        </div>
      </div>
      <div className="cell" id="year-select">
        2024
      </div>
    </div>
  );
}

export default DateSelect;
