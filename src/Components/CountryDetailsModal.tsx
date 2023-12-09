

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
        <h2>{countryDetails.name}</h2>
        {/* Render other details */}
        {/* <CloseModalButton onClick={onClose}>Close</CloseModalButton> */}
      </div>
  );
};


  return (


  );
}
