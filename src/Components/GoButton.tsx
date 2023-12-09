import React from "react";

interface GoButtonProps {
  handleSearch: () => void;
}

export const GoButton: React.FC<GoButtonProps> = ({ handleSearch }) => {
  return (
    <button
      className="bg-transparent rounded-3xl border-none p-x-1rem text-color-grey focus:outline-none hover:bg-black h-100% text-coolGray"
      onClick={handleSearch}
    >
      Go
    </button>
  );
};
