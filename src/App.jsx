
import React, {useState} from "react";
import './App.css' ;


function App() {
     const [foods, setFoods] = useState (["Orange", "Apple", "Manggo", "Banana"]);
     function handleFood(){
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
        <button onClick={handleFood}>
         Add Food
        </button>
      </div>
     )
}
export default App