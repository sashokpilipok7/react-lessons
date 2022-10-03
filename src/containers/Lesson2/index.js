import React, { useState } from "react";
import NewGoal from "./components/NewGoal";

const goalList = [
  { id: "1", text: "Learn English" },
  { id: "2", text: "Learn Spanish" },
];

function GoalList(props) {
  return props.list.map((item) => <p key={item.id}>{item.text}</p>);
}

function Lesson2() {
  const [goalListState, setGoalListState] = useState(goalList);

  function addGoal(newGoal) {
    goalList.push(newGoal);
    console.log(goalList, "goalList");
  }

  function addGoal2(newGoal) {
    setGoalListState([...goalListState, newGoal]);
  }

  function addGoal3(newGoal) {
    setGoalListState((prevState) => [...prevState, newGoal]);
  }

  return (
    <div>
      <h1 className="App-title">Second Lessons</h1>
      <div className="App-preview">
        <h2 className="App-preview_title">Теми:</h2>
        <ul className="App-preview_list">
          <li>Вступ в react-router-dom</li>
          <li>Хендлінг собитій</li>
          <li>Комунікація між child та parent</li>
          <li>Робота зі state</li>
          <li>Більше про state</li>
        </ul>
      </div>
      <div className="App-section">
        <h3>Вступ в react-router-dom</h3>
      </div>
      <div className="App-section">
        <h3>Хендлінг собитій</h3>
        <NewGoal />
        <GoalList list={goalList} />
      </div>
      <div className="App-section">
        <h3>Комунікація між child та parent</h3>
        <NewGoal addGoal={addGoal} />
        <GoalList list={goalList} />
      </div>
      <div className="App-section">
        <h3>Робота зі state</h3>
        <NewGoal addGoal={addGoal2} />
        <GoalList list={goalListState} />
      </div>
      <div className="App-section">
        <h3>Більше про state</h3>
        <NewGoal addGoal={addGoal3} />
        <GoalList list={goalListState} />
      </div>
    </div>
  );
}

export default Lesson2;
