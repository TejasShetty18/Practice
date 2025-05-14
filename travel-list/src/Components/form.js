function Form() {

  function handleSubmit(e){
   e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What all the Things you should carry, when you plan for a Trip 🤔</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Items..."></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
