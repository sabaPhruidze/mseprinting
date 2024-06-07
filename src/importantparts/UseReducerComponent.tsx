import { useReducer } from "react";

export interface InitialState {
  radioForRegLog: boolean;
}
const initialState: InitialState = {
  radioForRegLog: false,
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "SWITCH_LOG_REG":
      newState.radioForRegLog = action.payload;
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
