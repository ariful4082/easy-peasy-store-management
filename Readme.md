# Esay-Peasy Store Management

### Create Store

`
import { createStore } from 'easy-peasy';
import counter from './counterModel';
import member from './memberModel';
import productModel from './productModel';

const store = createStore(
{
member: member,
counter: counter,
product: productModel
}

);

export default store
`

### Connect Store to our application

`
import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
<StoreProvider store={store}>
<App />
</StoreProvider>
);

`

### Create Store Model `Optional`

- [x] Counter Model

`
import { action, persist } from "easy-peasy";

const counter = persist(
{

        count: 0,

        increment: action((state, payload)=>{
              state.count= state.count+1
        }),
        decrement: action((state,payload)=>{
          if(state.count > 0){
              state.count = state.count-1
          }
          state.count
        })


      }

)
export default counter
`

- [x] Member Model
      `
      import { action, persist } from "easy-peasy";

const member = persist({
member: [
{
name: 'Ariful Islam',
education: 'Kamil Pass',
age: 28
},
{
name: 'Rasel Mahmud',
education: 'HSC',
age: 25
}
],

      addMember: action((state, payload)=>{
        state.member = [...state.member, payload]
      }),
      deleteMember: action((state, payload)=>{
        const newMembers = state.member.filter(item=> item.age !== payload)
        state.member = newMembers
      })

})

export default member
`

- [x] Create Product Model
      `
      import axios from "axios";
      import { action, persist, thunk } from "easy-peasy";

const productModel = persist({
products: [],
addFromProduct: action((state, payload)=>{
state.products.push(payload)
}),
addProduct: thunk(async(state, payload)=>{
const {data}= await axios.get(payload)
state.addFromProduct(data)
})
})

export default productModel;
`

### Manage Data Or Handler In Application

`
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

`

### Flow Me

- [x] [Website](http://ariful-islam66.web.app/)
- [x] [Facebook](https://www.facebook.com/Ariful4082/)
- [x] [Github1](https://github.com/ariful4082)
- [ ] [Github2](https://github.com/ariful4966)
- [x] [Github3](https://github.com/nodeAriful)
- [ ] [Github4](https://github.com/ariful4900)
- [x] [LinkedIn](https://www.linkedin.com/in/ariful-islam0/)
- [x] [Twitter](https://twitter.com/ariful4082)
