import { useReducer, useCallback } from "react";

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

  rqSSend: boolean;
}

const initialState: InitialState = {
  radioForRegLog: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  showProductsServicesWindow: {
    showProductFromMenu: false,
    showProductFromBox: false,
  },
  SearchQuery: "",
  SearchResults: [],
  SearchDone: false,

  rqSSend: false,
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "SWITCH_LOG_REG":
      return { ...state, radioForRegLog: action.payload };

    case "SET_USER":
    case "USER_INFO": // Handles both "SET_USER" and "USER_INFO" cases
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU":
      return {
        ...state,
        showProductsServicesWindow: {
          ...state.showProductsServicesWindow,
          showProductFromMenu: action.payload,
        },
      };

    case "SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX":
      return {
        ...state,
        showProductsServicesWindow: {
          ...state.showProductsServicesWindow,
          showProductFromBox: action.payload,
        },
      };

    case "SEARCH_QUERY_CHANGE":
      return { ...state, SearchQuery: action.payload };

    case "SEARCH_RESULTS":
      return { ...state, SearchResults: action.payload };

    case "SEARCH_DONE":
      return { ...state, SearchDone: action.payload };

    case "REQUEST_QUOTE_SUCCESS_SEND":
      return { ...state, rqSSend: action.payload };

    default:
      throw new Error("Unknown action type");
  }
};

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatching = useCallback((type: string, payload: any) => {
    dispatch({ type, payload });
  }, []);

  return { state, dispatching };
}
