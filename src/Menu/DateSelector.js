import AnimateHeight from "react-animate-height";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "react-responsive";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateSelector = ({ location, date, setDate }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 700});
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    return date.getFullYear()+ "-" + (date.getMonth()+1) + "-" + date.getDate();
  };

  const handleDate = (date) => {
    if (!date)
      date = new Date();
    setDate(date);
    setOpen(false);
    navigate(`/menu/${location}/${formatDate(date)}`);
    
  };

  return (
      isMobile === undefined ? (
        <div className={`m-3 duration-300 ${open ? "border-2 bg-white" : ""} text-lg`}>
          <button onClick={() => setOpen(!open)} className={`bg-white ${open ? "" : "border-2"} my-2 py-2 px-5 duration-300`}>
            { date.toDateString() }
            { open ? <ExpandLessIcon fontSize="medium" /> : <ExpandMoreIcon fontSize="medium" /> }
          </button>
          <AnimateHeight height={open ? "auto" : 0} duration={200} className="center-text">
            <Calendar value={date} onChange={handleDate} className="mx-auto m-2" calendarType="US"/>
          </AnimateHeight>
        </div> 
      ) : (
        <div className="inline-block m-5 text-lg">
          {/* <DatePicker value={date} onChange={handleDate} required={true} clearIcon={null} className="p-5 bg-red-300"/> */}
          <button onClick={() => setOpen(!open)} className={`bg-white border-2 my-2 py-2 px-5 ${open ? "text-blue-700" : ""}`}>
            { date.toDateString() }
            <CalendarMonthIcon className="ml-5"/>
          </button>
          <Calendar value={date} onChange={handleDate} className={open ? "absolute z-40" : "hidden"} calendarType="US"/>
        </div>
        
      )
  );
}
 
export default DateSelector;