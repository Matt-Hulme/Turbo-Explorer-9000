import { useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { CountryNameList } from "../Components/CountryNameList";
import { useGetCountriesListQuery } from "../Queries/useGetCountriesListQuery";

export const HomePage = () => {
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState<string | null>(
    null
  );

  const {
    getCountriesList,
    getCountriesListData,
    hasGetCountriesListError,
    isGetCountriesListLoading,
  } = useGetCountriesListQuery();

  const sendSearchTermToHomePage = (searchTermFromSearchBar: string) => {
    if (searchTermFromSearchBar.trim() === "") {
      setSearchErrorMessage("Please enter a country");
      setIsSearchBarRaised(false);
    } else {
      setSearchErrorMessage(null);
      getCountriesList(searchTermFromSearchBar);
      setIsSearchBarRaised(true);
    }
  };

  return (
    <div className="background-container flex flex-col items-center justify-center h-screen max-h-screen">
      <SearchBar sendSearchTermToHomePage={sendSearchTermToHomePage} />
      {searchErrorMessage ? (
        <p className="text-red-500 bg-white p-y-.25rem p-x-.25rem ">
          {searchErrorMessage}
        </p>
      ) : isSearchBarRaised ? (
        <CountryNameList
          getCountriesListData={getCountriesListData}
          hasGetCountriesListError={hasGetCountriesListError}
          isGetCountriesListLoading={isGetCountriesListLoading}
        />
      ) : null}
    </div>
  );
};
