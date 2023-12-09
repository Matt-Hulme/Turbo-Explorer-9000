import { gql, useLazyQuery } from "@apollo/client";

const getCountryDetailsQuery = gql(`
  query GetCountryDetailsWithCountryCode($countryCodes: [String!]) {
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
    GetCountryDetailsWithCountryCode,
    {
      data,
      error: hasGetCountryDetailsError,
      loading: isGetCountryDetailsLoading,
    },
  ] = useLazyQuery(getCountryDetailsQuery);

  const getCountryDetails = (countryCodes: string) => {
    GetCountryDetailsWithCountryCode({ variables: { countryCodes } });
  };

  const getCountryDetailsData = data?.countries[0] ?? {};

  return {
    getCountryDetails,
    getCountryDetailsData,
    hasGetCountryDetailsError,
    isGetCountryDetailsLoading,
  };
};
