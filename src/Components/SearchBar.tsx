import classNames from "classnames";
import { useState } from "react";
import { GoButton } from "./GoButton";
import { CapitalizeFirstLetter } from "../Utils/CapitalizeFirstLetter";

interface SearchBarProps {
  sendSearchTermToHomePage: (term: string) => void;
  isSearchBarRaised: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  sendSearchTermToHomePage,
  isSearchBarRaised,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(CapitalizeFirstLetter(event.target.value));
  };

  const handleSearch = () => {
    sendSearchTermToHomePage(searchTerm);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={classNames(
        "w-30rem h-2.5rem rounded-3xl border-none flex items-center justify-center mx-auto bg-white",
        {
          "m-b-2rem": isSearchBarRaised,
        }
      )}
    >
      <input
        className="w-30rem h-100% rounded-3xl border-none bg-transparent p-l-1rem focus:outline-none placeholder:text-coolGray"
        placeholder="Search for a country"
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      <GoButton handleSearch={handleSearch} />
    </div>
  );
};
