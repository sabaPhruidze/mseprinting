import { useReducer } from "react";

interface SearchResult {
  id: number;
  title: string;
  link: string;
}

export interface InitialState {
  radioForRegLog: boolean;
  user: null | {
    firstname: string;
    lastname: string;
    email: string;
    jobTitle: string;
    company: string;
    phone: string;
    uid: string;
  };
  showProductsServicesWindow: {
    showProductFromMenu: boolean;
    showProductFromBox: boolean;
  };
  SearchQuery: string;
  SearchResults: SearchResult[];
  SearchDone: boolean;
  rqSubmit: boolean;
  rqSSend: boolean;
}

const initialState: InitialState = {
  radioForRegLog: false,
  user: null,
  showProductsServicesWindow: {
    showProductFromMenu: false,
    showProductFromBox: false,
  },
  SearchQuery: "",
  SearchResults: [],
  SearchDone: false,
  rqSubmit: false,
  rqSSend: false,
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
    case "SET_USER":
      newState.user = action.payload;
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
    case "SEARCH_QUERY_CHANGE":
      newState.SearchQuery = action.payload;
      break;
    case "SEARCH_RESULTS":
      newState.SearchResults = action.payload;
      break;
    case "SEARCH_DONE":
      newState.SearchDone = action.payload;
      break;
    case "REQUEST_QUOTE_CHANGE":
      newState.rqSubmit = action.payload;
      break;
    case "REQUEST_QUOTE_SUCCESS_SEND":
      newState.rqSSend = action.payload;
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
