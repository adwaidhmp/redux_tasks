import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset } from './slice';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px',backgroundColor:"red" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}> Reset 0</button>
    </div>
  );
}
