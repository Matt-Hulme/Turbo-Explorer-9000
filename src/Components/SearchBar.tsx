import classNames from "classnames";
import { useState } from "react";
import { GoButton } from "./GoButton";

interface SearchBarProps {
  sendSearchTermToHomePage: (term: string) => void;
}

export const SearchBar = ({ sendSearchTermToHomePage }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarRaised, setIsSearchBarRaised] = useState(false);

  const capitalizeFirstLetter = (word) => {
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
    sendSearchTermToHomePage(searchTerm);
    if (searchTerm !== "") {
      setIsSearchBarRaised(true);
    }
  };

  return (
    <div
      className={classNames(
        "w-22rem h-1.6rem rounded-3xl border-none flex items-center justify-center mx-auto bg-white",
        {
          "absolute top-1rem": isSearchBarRaised,
        }
      )}
    >
      <input
        className="w-22rem h-100% rounded-3xl border-none bg-transparent p-l-.75rem focus:outline-none placeholder:text-coolGray"
        placeholder="Search for a country"
        onChange={handleInputChange}
      />
      <GoButton handleSearch={handleSearch} />
    </div>
  );
};
