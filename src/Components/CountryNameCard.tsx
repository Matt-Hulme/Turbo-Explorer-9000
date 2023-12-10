import { useState, useEffect } from "react";
import { CountryDetailsModal } from "./CountryDetailsModal";
import { Country } from "../Queries/useGetCountriesListQuery";
import { useGetCountryDetailsQuery } from "../Queries/useGetCountryDetailsQuery";
import { MoreDetailsButton } from "./MoreDetailsButton";

interface CountryNameCardProps {
  country: Country;
}

export const CountryNameCard = ({ country }: CountryNameCardProps) => {
  const {
    getCountryDetails,
    getCountryDetailsData,
    hasGetCountryDetailsError,
    isGetCountryDetailsLoading,
  } = useGetCountryDetailsQuery();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMoreDetailsButtonClick = () => {
    getCountryDetails(country.code);
    setIsModalVisible(true);
  };

  const onDismiss = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        key={country.code}
        className="min-h-2.5rem flex flex-row items-center justify-between border-1px border-black border-solid rounded-.3rem bg-white p-l-.5rem"
      >
        <p className="m-y-0">{country.name}</p>
        <MoreDetailsButton
          handleMoreDetailsButtonClick={handleMoreDetailsButtonClick}
        />
      </div>
      {isModalVisible && (
        <CountryDetailsModal
          getCountryDetailsData={getCountryDetailsData}
          hasGetCountryDetailsError={hasGetCountryDetailsError}
          isGetCountryDetailsLoading={isGetCountryDetailsLoading}
          onDismiss={onDismiss}
        />
      )}
    </>
  );
};
