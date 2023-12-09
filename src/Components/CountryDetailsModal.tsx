import { ApolloError } from "@apollo/client";
import { CloseModalButton } from "./CloseModalButton";

interface Language {
  name: string;
}

interface Continent {
  name: string;
}

interface CountryDetails {
  name: string;
  code: string;
  continent: Continent;
  capital: string;
  languages: Language[];
  currencies: string[];
}

interface CountryDetailsModalProps {
  getCountryDetailsData: CountryDetails;
  hasGetCountryDetailsError: ApolloError | undefined;
  isGetCountryDetailsLoading: boolean;
  onDismiss: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  getCountryDetailsData,
  hasGetCountryDetailsError,
  isGetCountryDetailsLoading,
  onDismiss,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30vw h-70vh max-h-70vh flex flex-col items-center bg-white overflow-hidden border-none rounded-xl">
      {isGetCountryDetailsLoading ? (
        <h1>Loading...</h1>
      ) : hasGetCountryDetailsError ? (
        <h1>Error loading Country details</h1>
      ) : (
        <>
          <h1 className="text-black">{getCountryDetailsData?.name}</h1>
          {getCountryDetailsData?.code && (
            <h4>Country Code: {getCountryDetailsData.code}</h4>
          )}
          {getCountryDetailsData?.continent?.name && (
            <h4>Continent: {getCountryDetailsData.continent.name}</h4>
          )}
          {getCountryDetailsData?.capital && (
            <h4>Capital: {getCountryDetailsData.capital}</h4>
          )}
          {getCountryDetailsData?.languages?.length > 0 && (
            <h4>
              Languages:{" "}
              {getCountryDetailsData?.languages
                .map((language) => language?.name)
                .filter(Boolean)
                .join(", ")}
            </h4>
          )}
          {getCountryDetailsData?.currencies &&
            getCountryDetailsData.currencies[0] !== "" && (
              <h4>Currencies: {getCountryDetailsData.currencies}</h4>
            )}

          <CloseModalButton onDismiss={onDismiss} />
        </>
      )}
    </div>
  );
};
