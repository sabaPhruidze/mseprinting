import React from "react";
import { useNavigate } from "react-router-dom";
import { ResultsList, ResultItem, ResultTitle } from "../style/HeaderStyles";

interface SearchResult {
  id: number;
  title: string;
  link: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  dispatching: (action: string, payload: any) => void;
}

const SearchEngineResultList: React.FC<SearchResultsProps> = ({
  results,
  dispatching,
}) => {
  const navigate = useNavigate();

  return (
    <ResultsList resultsCount={results.length}>
      {results.map((result) => (
        <ResultItem
          key={result.id}
          onClick={() => {
            navigate(result.link);
            dispatching("SEARCH_DONE", false);
          }}
        >
          <ResultTitle>{result.title}</ResultTitle>
        </ResultItem>
      ))}
    </ResultsList>
  );
};

export default SearchEngineResultList;
