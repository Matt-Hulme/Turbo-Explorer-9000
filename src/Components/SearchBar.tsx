import React, { useState } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-22rem h-1.6rem rounded-3xl border-none flex items-center justify-center mx-auto bg-white">
      <input
        className="w-22rem h-1.6rem rounded-3xl border-none bg-transparent p-l-.75rem focus:outline-none"
        placeholder="Search for a country"
        onChange={handleInputChange}
      />
      <button className="bg-transparent border-none m-r-.5rem text-color-grey focus:outline-none">
        Go
      </button>
    </div>
  );
}
