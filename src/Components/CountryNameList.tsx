import React from "react";
import { Country } from "../Queries/useGetAllCountriesListQuery";
import { CountryNameCard } from "./CountryNameCard";

interface CountryNameListProps {
  getCountriesListData: Country[];
  isGetCountriesListLoading: boolean;
}

export const CountryNameList: React.FC<CountryNameListProps> = ({
  getCountriesListData,
  isGetCountriesListLoading,
}) => {
  return (
    <div className="flex flex-col gap-.25rem justify-start w-22rem max-h-70vh h-70vh rounded-.3rem overflow-auto">
      {isGetCountriesListLoading ? (
        <p className="min-h-1.75rem flex items-center border-1px border-black border-solid rounded-.3rem bg-white">
          Loading...
        </p>
      ) : (
        getCountriesListData.map((country) => (
          <CountryNameCard key={country.code} country={country} />
        ))
      )}
    </div>
  );
};
