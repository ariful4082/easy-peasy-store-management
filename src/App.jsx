import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const { member, counter, product } = useStoreState((store) => store);
  const {
    member: { addMember, deleteMember },
    counter: { increment, decrement },
    product: { addProduct },
  } = useStoreActions((store) => store);

  const pervez = {
    name: "Shahriar Pervez",
    education: "BSC",
    age: 24,
  };
  console.log(product.products);

  useEffect(() => {
    addMember(pervez);
    deleteMember(25);
    addProduct("https://dummyjson.com/products");
  }, []);
  console.log(member.member);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>Increment</button>
        <h3>{counter.count}</h3>
        <button onClick={decrement}>Decrement</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
