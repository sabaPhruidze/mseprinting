import { useReducer } from "react";

export interface InitialState {
  radioForRegLog: boolean;
  user: null | {
    firstname: string;
    lastname: string;
    email: string;
    uid: string;
  };
  showProductsServicesWindow: {
    showProductFromMenu: boolean;
    showProductFromBox: boolean;
  };
}

const initialState: InitialState = {
  radioForRegLog: false,
  user: null,
  showProductsServicesWindow: {
    showProductFromMenu: false,
    showProductFromBox: false,
  },
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
    case "USER_INFO":
      newState.user = action.payload;
      break;
    case "SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU":
      newState.showProductsServicesWindow.showProductFromMenu = action.payload;
      break;
    case "SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX":
      newState.showProductsServicesWindow.showProductFromBox = action.payload;
      break;
    default:
      throw new Error("Unknown action type");
  }

  return newState;
};

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function dispatching(type: string, payload: any) {
    dispatch({
      type: type,
      payload: payload,
    });
  }

  return { state, dispatching };
}
