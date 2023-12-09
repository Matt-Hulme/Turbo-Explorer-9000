import React from "react";
import { Country } from "../Queries/useGetAllCountriesListQuery";
import { CountryNameCard } from "./CountryNameCard";

interface CountryNameListProps {
  getCountriesListData: Country[];
}

export const CountryNameList: React.FC<CountryNameListProps> = ({
  getCountriesListData,
}) => {
  return (
    <div className="flex flex-col gap-.25rem justify-start w-22rem max-h-70vh h-70vh rounded-.3rem overflow-auto">
      {getCountriesListData.map((country) => (
        <CountryNameCard key={country.code} country={country} />
      ))}
    </div>
  );
};
