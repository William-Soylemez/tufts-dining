import { useMediaQuery } from "react-responsive";

const MealSelector = ({ selected, setSelected, meals }) => {
  const isMobile = useMediaQuery({ maxWidth: 700});

  return (
    <div className="
        w-auto mx-auto text-center
        duration-300 group inline-block mb-5
      ">
      <ul>
        {
          meals.map((meal) => (
            <li key={meal.key}
              className={`
                m-auto
                duration-300
                ${meal.key === selected.key ? "w-72 " : "w-48 "}
                ${
                  isMobile ?
                  "block" :
                  "border-r-2 border-gray-200 last:border-r-0 inline-block"
                }
              `}>
              <button className = {
                "text-lg w-2/3 py-2 my-2 hover:underline border-2  duration-300 " +
                ((isMobile) ? " py-3 " : "") +
                (meal.key === selected.key ? "bg-gradient-to-r from-blue-100 to-teal-100 border-gray-300" : "bg-white border-gray-200")
              }
                onClick={() => setSelected(meal)}>{ meal.name }</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
 
export default MealSelector;