import React from "react";
import { Country } from "../Queries/useGetCountriesListQuery";
import { CountryNameCard } from "./CountryNameCard";
import { ApolloError } from "@apollo/client";

interface CountryNameListProps {
  getCountriesListData: Country[];
  isGetCountriesListLoading: boolean;
  hasGetCountriesListError?: ApolloError | undefined;
}

export const CountryNameList: React.FC<CountryNameListProps> = ({
  getCountriesListData,
  isGetCountriesListLoading,
  hasGetCountriesListError,
}) => {
  return (
    <div className="flex flex-col gap-.25rem justify-start w-22rem max-h-70vh h-70vh rounded-.3rem overflow-auto">
      {isGetCountriesListLoading ? (
        <p className="min-h-1.75rem flex items-center justify-center border-1px border-black border-solid rounded-.3rem bg-white p-l-.5rem">
          Loading...
        </p>
      ) : hasGetCountriesListError ? (
        <p className="min-h-1.75rem flex items-center justify-center border-1px border-red-500 border-solid rounded-.3rem bg-white text-red-500 p-l-.5rem">
          Error loading Country List data
        </p>
      ) : getCountriesListData.length === 0 ? (
        <p className="min-h-1.75rem flex items-center justify-center border-1px border-black border-solid rounded-.3rem bg-white p-l-.5rem">
          No Results Found
        </p>
      ) : (
        getCountriesListData.map((country) => (
          <CountryNameCard key={country.code} country={country} />
        ))
      )}
    </div>
  );
};
