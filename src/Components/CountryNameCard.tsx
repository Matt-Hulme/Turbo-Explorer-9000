import React, { useState, useEffect } from "react";
import { CountryDetailsModal } from "./CountryDetailsModal";
import { Country } from "../Queries/useGetAllCountriesListQuery";
import { useGetCountryDetailsQuery } from "../Queries/useGetCountryDetailsQuery";

interface CountryNameCardProps {
  country: Country;
}

export const CountryNameCard = ({ country }: CountryNameCardProps) => {
  const {
    fetchCountryDetails,
    getCountryDetailsData,
    hasGetCountryDetailsError,
    isGetCountryDetailsLoading,
  } = useGetCountryDetailsQuery();

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (getCountryDetailsData) {
      setIsModalVisible(true);
    }
  }, [getCountryDetailsData]);

  const handleCountryNameCardClick = () => {
    fetchCountryDetails(country.code);
    console.log("countryNameCardHasBeenClicked:", getCountryDetailsData);
  };

  const closeModal = () => {
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
          countryDetails={getCountryDetailsData}
          onClose={closeModal}
        />
      )}
    </>
  );
};
