import React from "react";

function App() {
  const name = "Tejas Shetty";
  const x = 10;
  const y = 20;
  const names = ["raj", "tej", "ram"];

  return (
    <>
      <div className="text-5xl font-bold underline">App</div>
      <br></br>
      <p>Hello {name}</p>
        <br></br>
      <p>
        the sun of {x} and {y} is {x + y}
      </p>
        <br></br>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
