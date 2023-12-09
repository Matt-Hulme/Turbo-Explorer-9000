import { CloseModalButton } from "./CloseModalButton";

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
  onDismiss: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  countryDetails,
  onDismiss,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35vw h-70vh flex justify-end align-top bg-white ">
      <CloseModalButton onDismiss={onDismiss} />
    </div>
  );
};
