import { useState, useCallback } from "react";
import {
  SearchEngineContainer,
  SearchEngineInput,
  SearchEngineButton,
  SearchEngineIcon,
  ResultsList,
  ResultItem,
  ResultTitle,
} from "../style/HeaderStyles";

import SEARCHICON from "../assets/icon/header/SEARCH.svg";

interface SearchResult {
  id: number;
  title: string;
}

const SearchEngine: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = useCallback(() => {
    const data: SearchResult[] = [
      {
        id: 1,
        title: "First Result",
      },
      {
        id: 2,
        title: "Second Result",
      },
      {
        id: 3,
        title: "Third Result",
      },
    ];

    // Filter results based on query
    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  }, [query]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <SearchEngineContainer>
      <SearchEngineInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <SearchEngineButton onClick={handleSearch}>
        <SearchEngineIcon src={SEARCHICON} alt="search icon" />
      </SearchEngineButton>
      <ResultsList>
        {results.map((result) => (
          <ResultItem key={result.id}>
            <ResultTitle>{result.title}</ResultTitle>
          </ResultItem>
        ))}
      </ResultsList>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
