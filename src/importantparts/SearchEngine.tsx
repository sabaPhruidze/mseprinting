import React, { useState } from "react";
import {
  SearchEngineContainer,
  SearchEngineButton,
  SearchEngineInput,
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
      {/* <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </li>
        ))}
      </ul> */}
    </SearchEngineContainer>
  );
};

export default SearchEngine;
