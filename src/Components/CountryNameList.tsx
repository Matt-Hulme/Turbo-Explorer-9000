import { ApolloError } from "@apollo/client";
import { Country } from "../Queries/useGetCountriesListQuery";
import { CountryNameCard } from "./CountryNameCard";

interface CountryNameListProps {
  getCountriesListData: Country[];
  isGetCountriesListLoading: boolean;
  hasGetCountriesListError?: ApolloError | undefined;
  isSearchTermValid: boolean;
}

export const CountryNameList: React.FC<CountryNameListProps> = ({
  getCountriesListData,
  isGetCountriesListLoading,
  hasGetCountriesListError,
  isSearchTermValid,
}) => {
  return (
    <div className="flex flex-col gap-.25rem justify-start w-30rem max-h-55vh h-55vh rounded-.3rem overflow-auto border-none ">
      {!isSearchTermValid ? (
        <p className="text-red-500 bg-white p-y-.5rem p-x-.5rem rounded-xl">
          Please enter a country
        </p>
      ) : isGetCountriesListLoading ? (
        <p className="min-h-2rem flex items-center justify-center border-1px border-black border-solid rounded-.3rem bg-white p-l-.5rem rounded-xl">
          Loading...
        </p>
      ) : hasGetCountriesListError ? (
        <p className="min-h-2rem flex items-center justify-center border-1px border-red-500 border-solid rounded-.3rem bg-white text-red-500 p-l-.5rem rounded-xl">
          Error loading Country List data
        </p>
      ) : getCountriesListData.length === 0 ? (
        <p className="min-h-2rem flex items-center justify-center border-1px border-black border-solid rounded-.3rem bg-white p-l-.5rem rounded-xl">
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
