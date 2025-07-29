// reducer.js
// const initialState = { count : 0 , name:"Adwaidh" };

// export default function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// reducer.js
import { produce } from "immer";

const initialState = { count: 0, name: "Adwaidh" };

export default function counterReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT":
        draft.count += 1;
        break;
      case "DECREMENT":
        draft.count -= 1;
        break;
      default:
        // No change; return draft as-is
        break;
    }
  });
}
