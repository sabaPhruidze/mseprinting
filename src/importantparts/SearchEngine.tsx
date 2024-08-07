import React, { useCallback, useContext } from "react";
import { rootContext } from "../Root";

import {
  SearchEngineContainer,
  SearchEngineInput,
  SearchEngineButton,
  SearchEngineIcon,
} from "../style/SearchEngineStyles";

import SEARCHICON from "../assets/icon/header/SEARCH.svg";

interface SearchResult {
  title: string;
  link: string;
}

const SearchEngine: React.FC = () => {
  const searchContext = useContext(rootContext);

  if (!searchContext) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state, dispatching } = searchContext;
  const { SearchQuery } = state;

  const handleSearch = useCallback(() => {
    const data: SearchResult[] = [
      {
        title: "home",
        link: "/",
      },
      {
        title: "request a quote",
        link: "/request-quote",
      },
      {
        title: "Send a File",
        link: "/send-file",
      },
    ];

    // Filter results based on query
    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(SearchQuery.toLowerCase())
    );
    dispatching("SEARCH_RESULTS", filteredResults);
    dispatching("SEARCH_DONE", true);
  }, [SearchQuery]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatching("SEARCH_QUERY_CHANGE", e.target.value);
  }, []);

  return (
    <SearchEngineContainer>
      <SearchEngineInput
        type="text"
        value={SearchQuery}
        onChange={handleChange}
        placeholder="Search..."
      />
      <SearchEngineButton onClick={handleSearch}>
        <SearchEngineIcon src={SEARCHICON} alt="search icon" />
      </SearchEngineButton>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
