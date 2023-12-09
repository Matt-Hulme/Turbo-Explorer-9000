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
  hasGetCountryDetailsError: boolean;
  isGetCountryDetailsLoading: boolean;
  onDismiss: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  getCountryDetailsData,
  hasGetCountryDetailsError,
  isGetCountryDetailsLoading,
  onDismiss,
}) => {
  console.log("CountryDetailsModal Data:", getCountryDetailsData);
  console.log("Continent Name:", getCountryDetailsData?.continent?.name);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35vw h-70vh max-h-70vh flex flex-col items-center bg-white overflow-hidden">
      {isGetCountryDetailsLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="text-black">{getCountryDetailsData?.name}</h1>
          <h4>Country Code: {getCountryDetailsData?.code}</h4>
          <h4>Continent: {getCountryDetailsData?.continent?.name}</h4>
          <h4>Capital: {getCountryDetailsData?.capital}</h4>
          <h4>
            Languages:{" "}
            {getCountryDetailsData?.languages
              ?.map((language) => language?.name)
              .filter(Boolean)
              .join(", ")}
          </h4>
          <h4>
            Currencies:{" "}
            {getCountryDetailsData?.currencies?.filter(Boolean).join(", ")}
          </h4>

          <CloseModalButton onDismiss={onDismiss} />
        </>
      )}
    </div>
  );
};
