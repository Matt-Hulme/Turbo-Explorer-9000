import React, { useState } from "react";
import { CountryDetailsModal } from "./CountryDetailsModal";
import { Country } from "../Queries/useGetCountriesListQuery";
import { useGetCountryDetailsQuery } from "../Queries/useGetCountryDetailsQuery";

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

  const handleCountryNameCardClick = () => {
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
        className="min-h-1.75rem flex items-center border-1px border-black border-solid rounded-.3rem bg-white p-l-.25rem"
        onClick={handleCountryNameCardClick}
      >
        <p className="m-y-0">{country.name}</p>
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
