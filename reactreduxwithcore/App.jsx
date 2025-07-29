// App.jsx

import { useSelector, useDispatch } from "react-redux";
// import { fetchdata } from "./components/async/async_action";
import { decrement,increment } from "./action";


export default function App() {
  const value = useSelector((data) => data.count);
  const user = useSelector((data)=>data.name)
  // const data  = useSelector((state) => state.data);
  // const load =useSelector((state)=>state.loading)
  // const error =useSelector((state)=>state.error)
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{user}</h2>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
    </div>
//     <div>
//       <button onClick={()=>dispatch(fetchdata())}>haii</button>
//       <h1>user data</h1>
//       <h1>{load? "loading":"done"}</h1>
//       <ul>
//   {data.slice(0,10).map((i) => {
//     return <li key={i.id}>{i.id}</li>;
//   })}
// </ul>

//       <h1>{error}</h1>
//     </div>
  );
}
