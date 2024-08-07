import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ResultsList,
  ResultItem,
  ResultTitle,
} from "../style/SearchEngineStyles";

interface SearchResult {
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
    <ResultsList resultscount={results.length}>
      {results.map((result) => (
        <ResultItem
          key={result.link}
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
