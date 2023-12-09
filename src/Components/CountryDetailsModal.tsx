interface CountryDetails {
  name: string;
  code: string;
  continent: string;
  capital: string;
  languages: string[];
  currencies: string[];
}

interface CountryDetailsModalProps {
  countryDetails: CountryDetails;
  onClose: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  countryDetails,
  onClose,
}) => {
  // Your modal content goes here

  return (
    <div>
      {/* Render other details */}
      {/* <CloseModalButton onClick={onClose}>Close</CloseModalButton> */}
    </div>
  );
};
