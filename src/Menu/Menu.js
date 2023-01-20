import { useParams } from "react-router-dom";
import LocationSelector from "./LocationSelector";
import Meal from "./Meal";
import { useState, useEffect } from "react";
import MealSelector from "./MealSelector";
import DateSelector from "./DateSelector";
import GLOBALS from "../Globals";

const Menu = () => {
  const { location: locationIn, date: dateIn } = useParams();
  const [date, setDate] = useState(new Date(dateIn));
  const [location, setLocation] = useState(locationIn);
  const [meals, setMeals] = useState(null);
  // Status: 0 - loading, 1 - found, 2 - not found
  const [status, setStatus] = useState(0);
  const [selected, setSelected] = useState(null);

  const formatDate = (date) => {
    return date.getFullYear()+ "-" + (date.getMonth()+1) + "-" + date.getDate();
  };

  useEffect(() => {
    const abortCont = new AbortController();
    setStatus(0);
    fetch(`http://127.0.0.1:5000/meals/${location}/${formatDate(date)}`)
      .then(res => {
        if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
        return res.json();
      })
      .then((data) => {
        setMeals(data);
        if (data) {
          setStatus(1);
          setSelected(data[0]);
        } else {
          setStatus(3);
        }
      })
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setStatus(2);
        }
      });
    return () => abortCont.abort();
  }, [location, date]);


  return (
    <div>
      <div className="border-y-2 py-2 border-gray-200 bg-slate-50 my-10 text-center">
        <LocationSelector date={date} location={location} setLocation={setLocation} />
        <DateSelector date={date} location={location} setDate={setDate} />
        { meals && meals.length > 1 && <MealSelector selected={selected} setSelected={setSelected} meals={meals}/>}
      </div>
      <div className="my-10">
        { status === 0 && <div className="text-center text-3xl animate-bounce">Loading...</div> }
        { status === 1 && (
          <div>
            <Meal meal={selected}/>
          </div>
        ) }
        { status === 2 && <div className="text-center text-2xl py-5 px-10 m-auto w-fit rounded-lg">No meal data for this date and location</div> }
        { status === 3 && <div className="text-center text-2xl py-5 px-10 m-auto w-fit rounded-lg">
          { GLOBALS.LOCATIONS.filter(el => el.id === location)[0].name } is not serving anything on this date
        </div> }
        <p className="mx-5 my-10 text-gray-500">
          All information is from Tufts dining website (<a href="https://menus.tufts.edu" target="_blank" rel="noreferrer" className="underline">https://menus.tufts.edu</a>)
        </p>
      </div>
    </div>
  );
}
 
export default Menu;