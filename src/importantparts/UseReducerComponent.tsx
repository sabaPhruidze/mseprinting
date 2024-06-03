import { useReducer } from "react";

export interface InitialState {
  name: string;
}
const initialState: InitialState = {
  name: "sssssss",
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "N_C":
      newState.name = action.payload;
      break;
    default:
      throw new Error("Unknown action type");
  }

  return newState;
};

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function dispatching(type: string, payload: boolean) {
    dispatch({
      type: type,
      payload: payload,
    });
  }
  return { state, dispatching };
}
