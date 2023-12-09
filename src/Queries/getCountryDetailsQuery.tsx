import { gql, useLazyQuery } from "@apollo/client";

const getCountryDetailsQuery = gql(`
  query GetCountryDetailsList($countryCodes: [String!]) {
    countries(filter: { code: { in: $countryCodes } }) {
      name
      code
      continent{name}
      capital
      languages{name}
      currencies
    }
  }
`);

export const useGetCountryDetailsQuery = () => {
  const [
    getCountryDetails,
    {
      data,
      error: hasGetCountryDetailsError,
      loading: isGetCountryDetailsLoading,
    },
  ] = useLazyQuery(getCountryDetailsQuery);

  const fetchCountryDetails = (countryCodes: string) => {
    getCountryDetails({ variables: { countryCodes } });
  };

  const getCountryDetailsData = data?.countries ?? {};

  return {
    fetchCountryDetails,
    getCountryDetailsData,
    hasGetCountryDetailsError,
    isGetCountryDetailsLoading,
  };
};
