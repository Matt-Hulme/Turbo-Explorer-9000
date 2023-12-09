import React from "react";
import { Country } from "../Queries/useGetAllCountriesListQuery";
import { CountryNameCard } from "./CountryNameCard";

interface CountryNameListProps {
  filteredCountriesList: Country[];
}

export const CountryNameList: React.FC<CountryNameListProps> = ({
  filteredCountriesList,
}) => {
  return (
    <div className="flex flex-col gap-.25rem w-22rem max-h-70vh rounded-.3rem overflow-auto">
      {filteredCountriesList.map((country) => (
        <CountryNameCard key={country.code} country={country} />
      ))}
    </div>
  );
};
