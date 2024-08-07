import React, { useCallback, useContext, useEffect, useState } from "react";
import { rootContext } from "../Root";
import {
  SearchEngineContainer,
  SearchEngineInput,
  SearchEngineButton,
  SearchEngineIcon,
} from "../style/SearchEngineStyles";
import SEARCHICON from "../assets/icon/header/SEARCH.svg";
import { fetchSearchEngineData } from "../data/sub-category data/AllSubCategoryData";

interface SearchResult {
  title: string;
  link: string;
}

const SearchEngine: React.FC = () => {
  const searchContext = useContext(rootContext);
  const [data, setData] = useState<SearchResult[]>([]);

  if (!searchContext) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state, dispatching } = searchContext;
  const { SearchQuery } = state;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSearchEngineData();
      if (result) {
        setData(result);
      }
    };

    fetchData();
  }, []);

  const handleSearch = useCallback(() => {
    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(SearchQuery.toLowerCase())
    );
    dispatching("SEARCH_RESULTS", filteredResults);
    dispatching("SEARCH_DONE", true);
  }, [SearchQuery, data, dispatching]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatching("SEARCH_QUERY_CHANGE", e.target.value);
    },
    [dispatching]
  );

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
