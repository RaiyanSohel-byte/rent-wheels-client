import React, { use } from "react";
import { SearchContext } from "../contexts/SearchContext/SearchContext";

const useSearch = () => {
  const searchInfo = use(SearchContext);
  return searchInfo;
};

export default useSearch;
