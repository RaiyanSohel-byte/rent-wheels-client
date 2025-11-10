import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const searchInfo = { search, setSearch };
  return <SearchContext value={searchInfo}>{children}</SearchContext>;
};

export default SearchProvider;
