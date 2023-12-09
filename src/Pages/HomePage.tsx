import { useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import {
  useGetAllCountriesListQuery,
  Country,
} from "../Queries/useGetAllCountriesListQuery";
import { CountryNameList } from "../Components/CountryNameList";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);

  const {
    getAllCountriesListData,
    hasGetAllCountriesListError,
    isGetAllCountriesListLoading,
  } = useGetAllCountriesListQuery();

  const sendSearchTermToHomePage = (searchTermFromSearchBar: string) => {
    setSearchTerm(searchTermFromSearchBar);
    if (searchTermFromSearchBar !== "") {
      setIsSearchBarRaised(true);
    }
  };

  const filteredCountriesList: Country[] = getAllCountriesListData.filter(
    (country) => country.name.includes(searchTerm)
  );

  console.log("filtered Countries List:", filteredCountriesList);

  return (
    <div className="background-container flex flex-col items-center justify-center h-screen max-h-screen">
      <SearchBar sendSearchTermToHomePage={sendSearchTermToHomePage} />
      {isSearchBarRaised && (
        <CountryNameList filteredCountriesList={filteredCountriesList} />
      )}
    </div>
  );
};
