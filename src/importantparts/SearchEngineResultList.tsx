import React, { useEffect, useState } from "react";
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
  state: any;
}

const SearchEngineResultList: React.FC<SearchResultsProps> = ({
  results,
  dispatching,
  state,
}) => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ResultsList
      $resultscount={results.length}
      $screenWidth={screenWidth}
      $isUser={!!state.user}
    >
      {results.map((result, index) => (
        <ResultItem
          key={`${result.link}-${index}`}
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
