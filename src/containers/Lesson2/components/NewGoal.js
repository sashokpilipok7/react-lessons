function NewGoal({ addGoal }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal",
    };

    console.log("new Goal", newGoal);
    addGoal && addGoal(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;
