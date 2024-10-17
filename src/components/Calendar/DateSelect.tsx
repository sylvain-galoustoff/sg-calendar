import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import ButtonIcon from "../common/ButtonIcon";
import { getMonthFromParams, months } from "../../utils/dates";
import { AnimatePresence, motion } from "framer-motion";

function DateSelect() {
  const params = useParams();
  const navigate = useNavigate();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  useEffect(() => {
    const date = getMonthFromParams(params);
    if (date) {
      setCurrentYear(date.getFullYear());
      setCurrentMonth(date.getMonth());
    }
  }, [params]);

  const handlePreviousMonth = () => {
    let previousYear = currentYear;
    let previousMonth = currentMonth;
    if (currentMonth === 0) {
      previousYear = previousYear - 1;
      previousMonth = 12;
    }
    navigate(`/${previousYear}/${previousMonth}`);
  };

  const handleNextMonth = () => {
    let nextYear = currentYear;
    let nextMonth = currentMonth;
    if (currentMonth === 11) {
      nextYear = nextYear + 1;
      nextMonth = 1;
    } else {
      nextMonth = nextMonth + 2;
    }
    navigate(`/${nextYear}/${nextMonth}`);
  };

  return (
    <div className="big bold" id="date-select">
      <div className="cell" id="month-select">
        <ButtonIcon
          icon={<IoCaretBack />}
          id="previous-month"
          classNames="ghost"
          onClick={handlePreviousMonth}
        />
        <AnimatePresence mode="wait">
          <motion.p
            id="month-value"
            key={currentMonth}
            initial={{ transform: "rotateX(-90deg)" }}
            animate={{ transform: "rotateX(0)" }}
            exit={{ transform: "rotateX(90deg)" }}
            transition={{ ease: "easeOut", duration: 0.15 }}
          >
            {months[currentMonth]}
          </motion.p>
        </AnimatePresence>
        <ButtonIcon
          icon={<IoCaretForward />}
          classNames="ghost"
          id="next-month"
          onClick={handleNextMonth}
        />
      </div>
      <div className="cell" id="year-select">
        {currentYear}
      </div>
    </div>
  );
}

export default DateSelect;
