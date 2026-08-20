import "./App.css";
import PhonesCollection from "./components/PhonesCollection";

const phonesPromise = fetch("http://localhost:3000/phones").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <PhonesCollection phonesPromise={phonesPromise}></PhonesCollection>
    </>
  );
}

export default App;
