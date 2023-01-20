import { useState } from "react";
import { useEffect } from "react";

const Meal = ({meal}) => {
  const [mealGrouped, setMealGrouped] = useState([]);

  useEffect(() => {
    let newMealGrouped = [];
    let mealCat = {};
    meal.items.forEach(item => {
      if (item.type === "header") {
        newMealGrouped.push(mealCat);
        mealCat = {name: item.name, key: item.key, items: []}
      } else {
        mealCat.items.push({name: item.name, key: item.key})
      }
    })
    newMealGrouped.push(mealCat);
    newMealGrouped.splice(0, 1);
    setMealGrouped(newMealGrouped);
  }, [meal]);
  

  
  return (
    <div className="m-auto w-5/6 columns-xs">
      {mealGrouped.map((mealCat) => (
        <div key={mealCat.key} 
          className="
            rounded-2xl border border-gray-200 
            hover:shadow-md hover:shadow-gray-400 duration-300 hover:bg-slate-50 hover:scale-105
            px-4 pb-2 pt-4 break-inside-avoid-column m-5 group"
        >
          <p 
            className="
              rounded-xl bg-gradient-to-r from-blue-500 to-teal-300
              p-2 text-center mb-2
              text-xl text-slate-900 font-semibold
            "
          >{ mealCat.name }</p>
          <ul>
            {
              mealCat.items.map(mealItem => (
                <li className="
                  border-gray-100 border-b-2 py-2 text-center max-w-xs mx-auto last:border-b-0
                  group-hover:border-gray-200 duration-300
                " key={mealItem.key}>{ mealItem.name }</li>
            ))}
          </ul>
        </div>
        ))}
      </div>
  );
}

export default Meal;