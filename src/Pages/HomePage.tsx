import { useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { CountryNameList } from "../Components/CountryNameList";
import { useGetCountriesListQuery } from "../Queries/useGetCountriesListQuery";

export const HomePage = () => {
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);
  const [invalidSearchMessage, setInvalidSearchMessage] = useState<
    string | null
  >(null);

  const {
    getCountriesList,
    getCountriesListData,
    hasGetCountriesListError,
    isGetCountriesListLoading,
  } = useGetCountriesListQuery();

  const sendSearchTermToHomePage = (searchTermFromSearchBar: string) => {
    if (searchTermFromSearchBar.trim() === "") {
      setInvalidSearchMessage("Please enter a country");
      setIsSearchBarRaised(false);
    } else {
      setInvalidSearchMessage(null);
      getCountriesList(searchTermFromSearchBar);
      setIsSearchBarRaised(true);
    }
  };

  return (
    <div className="background-container flex flex-col items-center justify-center h-screen max-h-screen">
      <SearchBar sendSearchTermToHomePage={sendSearchTermToHomePage} />
      {invalidSearchMessage ? (
        <p className="text-red-500 bg-white p-y-.5rem p-x-.5rem rounded-xl ">
          {invalidSearchMessage}
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
