import { gql, useLazyQuery } from "@apollo/client";

const getCountriesListQuery = gql`
  query getCountriesListWithSearchTerm($searchTerm: String!) {
    countries(filter: { name: { regex: $searchTerm } }) {
      name
      code
    }
  }
`;

export const useGetCountriesListQuery = () => {
  const [
    getCountriesListWithSearchTerm,
    {
      data,
      error: hasGetCountriesListError,
      loading: isGetCountriesListLoading,
    },
  ] = useLazyQuery(getCountriesListQuery);

  const getCountriesListData = data?.countries ?? [];

  const getCountriesList = (searchTerm: string) => {
    getCountriesListWithSearchTerm({
      variables: { searchTerm: `^${searchTerm}` },
    });
  };

  return {
    getCountriesList,
    getCountriesListData,
    hasGetCountriesListError,
    isGetCountriesListLoading,
  };
};
