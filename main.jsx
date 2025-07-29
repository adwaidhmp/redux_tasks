import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './components/thunkrtk/store';
// import { store } from './components/pages/store9';
// import { Store } from './components/TodoList/TodoStore';
// import { store } from './components/rtk/store5';
// import { Provider } from 'react-redux';
// import store from './components/reselect/store3.jsx';
// import mystore from './components/reactreduxwithcore/store'; // 🔁 adjust path if needed
// import mystore from './components/reactreduxwithcore/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <App />
</Provider>
  </StrictMode>
);
