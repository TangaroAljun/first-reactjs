import React, {useState} from "react";
import '../App.css'
   
function Fruits() {
  const [foods, setFoods] = useState (["Orange", "Apple", "Manggo", "Banana"]);
  function addFood(){
  const newFood = document.getElementById("foodInput").value;
  document.getElementById("foodInput").value = "" ;

  setFoods(foods =>[...foods, newFood]);

  }
  return (
   <div>
     <h2>LIST OF AVAILABLE FOODS</h2>
     <ul>
       {foods.map((food, index) => <ul key = {index}>{food} </ul> )}
     </ul>
     <input type="input" id="foodInput" placeholder="Enter food name" />
     <button onClick={addFood}>
      Add Food
     </button>
   </div>
  )
}
export default Fruits;