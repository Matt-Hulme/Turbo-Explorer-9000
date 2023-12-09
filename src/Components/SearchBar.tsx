import classNames from "classnames";
import { useState } from "react";
import { GoButton } from "./GoButton";

interface SearchBarProps {
  sendSearchTermToHomePage: (term: string) => void;
}

export const SearchBar = ({ sendSearchTermToHomePage }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);

  const capitalizeFirstLetter = (word: string) => {
    const lowercaseWords = ["and", "the", "of"];
    return lowercaseWords.includes(word.toLowerCase())
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTermCapitalized = event.target.value
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");

    setSearchTerm(searchTermCapitalized);
  };

  const handleSearch = () => {
    if (searchTerm !== "") {
      setIsSearchBarRaised(true);
    } else {
      setIsSearchBarRaised(false);
    }
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
          "absolute top-1rem": isSearchBarRaised,
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
