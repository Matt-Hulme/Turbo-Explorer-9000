import { useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { CountryNameList } from "../Components/CountryNameList";
import { useGetCountriesListQuery } from "../Queries/useGetCountriesListQuery";

export const HomePage = () => {
  const [isSearchTermValid, setIsSearchTermValid] = useState(true);
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);

  const {
    getCountriesList,
    getCountriesListData,
    hasGetCountriesListError,
    isGetCountriesListLoading,
  } = useGetCountriesListQuery();

  const sendSearchTermToHomePage = (searchTermFromSearchBar: string) => {
    getCountriesList(searchTermFromSearchBar);
    if (searchTermFromSearchBar.trim() === "") {
      setIsSearchBarRaised(true);
      setIsSearchTermValid(false);
    } else {
      setIsSearchBarRaised(true);
      setIsSearchTermValid(true);
    }
  };

  return (
    <div className="background-container flex flex-col items-center justify-center h-screen max-h-screen">
      <h1 className=" absolute top-2rem p-y-0 m-y-0 text-8rem text-white text-shadow-xl">
        Turbo-Explorer 9000
      </h1>
      <SearchBar
        sendSearchTermToHomePage={sendSearchTermToHomePage}
        isSearchBarRaised={isSearchBarRaised}
      />
      {isSearchBarRaised ? (
        <CountryNameList
          getCountriesListData={getCountriesListData}
          hasGetCountriesListError={hasGetCountriesListError}
          isGetCountriesListLoading={isGetCountriesListLoading}
          isSearchTermValid={isSearchTermValid}
        />
      ) : null}
    </div>
  );
};
