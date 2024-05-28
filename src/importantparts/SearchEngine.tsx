import React, { useState } from "react";
import {
  SearchEngineContainer,
  SearchEngineInput,
  SearchEngineButton,
} from "../style/HeaderStyles";
interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const SearchEngine: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    const data: SearchResult[] = [
      {
        id: 1,
        title: "First Result",
        description: "This is the first search result",
      },
      {
        id: 2,
        title: "Second Result",
        description: "This is the second search result",
      },
      {
        id: 3,
        title: "Third Result",
        description: "This is the third search result",
      },
    ];

    // Filter results based on query
    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <SearchEngineContainer>
      <SearchEngineInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SearchEngineButton onClick={handleSearch}>Search</SearchEngineButton>
      {/* <ResultsList>
        {results.map((result) => (
          <ResultItem key={result.id}>
            <ResultTitle>{result.title}</ResultTitle>
            <ResultDescription>{result.description}</ResultDescription>
          </ResultItem>
        ))}
      </ResultsList> */}
    </SearchEngineContainer>
  );
};

export default SearchEngine;
