import { useNavigate } from "react-router-dom";
import useMediaQuery from "react-responsive";
import GLOBALS from "../Globals";

const LocationSelector = ({ date, location, setLocation }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 700});

  const formatDate = (date) => {
    return date.getFullYear()+ "-" + (date.getMonth()+1) + "-" + date.getDate();
  };

  const handleLocation = (location) => {
    setLocation(location);
    navigate(`/menu/${location}/${formatDate(date)}`);
  };

  return (
    <div className={`
      ${isMobile === undefined ? "block text-center mt-5" : "inline-block w-64 m-5"} 
      
      `
    }>

      <form className="mx-auto">
        <select name="" id="" value={ location } onChange={(e) => handleLocation(e.target.value)}
          className="
            px-5 py-2 text-lg border-2
          "
        >
        {
          GLOBALS.LOCATIONS.map(locationChoice => (
            <option key={locationChoice.key} value={locationChoice.id}>{ locationChoice.name }</option>
          ))
        }
       </select>
      </form>

    </div>
  );
}
 
export default LocationSelector;