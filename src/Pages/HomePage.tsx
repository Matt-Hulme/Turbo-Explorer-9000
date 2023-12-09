import { useState } from "react";
import { SearchBar } from "../Components/SearchBar";

import { CountryNameList } from "../Components/CountryNameList";
import {
  useGetCountriesListQuery,
  Country,
} from "../Queries/useGetCountriesListQuery";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);

  const {
    getCountriesList,
    getCountriesListData,
    hasGetCountriesListError,
    isGetCountriesListLoading,
  } = useGetCountriesListQuery();

  const sendSearchTermToHomePage = (searchTermFromSearchBar: string) => {
    setSearchTerm(searchTermFromSearchBar);
    getCountriesList(searchTermFromSearchBar);
    if (searchTermFromSearchBar !== "") {
      setIsSearchBarRaised(true);
    }
  };

  return (
    <div className="background-container flex flex-col items-center justify-center h-screen max-h-screen">
      <SearchBar sendSearchTermToHomePage={sendSearchTermToHomePage} />
      {isSearchBarRaised && (
        <CountryNameList
          getCountriesListData={getCountriesListData}
          hasGetCountriesListError={hasGetCountriesListError}
          isGetCountriesListLoading={isGetCountriesListLoading}
        />
      )}
    </div>
  );
};
