import Logo from "./Components/logo.js";
import Form from "./Components/form.js";
import Packing from "./Components/packingList.js";
import Status from "./Components/status.js";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packing />
      <Status />
    </div>
  );
}

export default App;
