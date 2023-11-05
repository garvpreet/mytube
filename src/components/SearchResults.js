import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";

import { setChannelId } from "../utils/ChannelIdSlice";
import { closeMenu } from "../utils/SideMenuSlice";
import { SEARCH_RESULTS_API } from "../utils/Constants";

// Search Results
const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const dispatcher = useDispatch();

  useEffect(() => {
    getSearchData();
    dispatcher(closeMenu());
  }, [query]);

  const getSearchData = async () => {
    const data = await fetch(SEARCH_RESULTS_API + query);
    const json = await data.json();
    setSearchResults(json?.items);
  };

  return (
    <div className="p-2 w-full dark:bg-slate-800 overflow-y-hidden">
      {searchResults.map((result) => (
        <Link
          key={result?.id?.videoId}
          to={"/watch?v=" + result?.id?.videoId}
          onClick={() => {
            dispatcher(setChannelId(result?.snippet?.channelId));
          }}
        >
          <SearchVideoCard data={result?.snippet} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
