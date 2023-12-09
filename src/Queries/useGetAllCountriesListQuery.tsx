import { gql, useQuery } from "@apollo/client";

export interface Country {
  name: string;
  code: string;
}

const getAllCountriesListQuery = gql(`
  query GetAllCountriesList {
    countries {
      name
      code
    }
  }
`);

export const useGetAllCountriesListQuery = () => {
  const {
    data,
    error: hasGetAllCountriesListError,
    loading: isGetAllCountriesListLoading,
  } = useQuery(getAllCountriesListQuery);

  const getAllCountriesListData: Country[] =
    data?.countries.map((country: Country) => ({
      ...country,
      name: country.name.toLowerCase(),
    })) ?? [];

  return {
    getAllCountriesListData,
    hasGetAllCountriesListError,
    isGetAllCountriesListLoading,
  };
};
