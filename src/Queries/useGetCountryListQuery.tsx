// import { gql, useQuery } from "@apollo/client";

// const getAllCountriesListQuery = gql(`
//   query GetAllCountriesList {
//     countries {
//       name
//       capital
//       languages
//       currencies
//     }
//   }
// `);

// export const useGetAllCountriesListQuery = () => {
//   const {
//     data,
//     error: hasGetAllCountriesListError,
//     loading: isGetAllCountriesListLoading,
//   } = useQuery(getAllCountriesListQuery);

//   const getAllCountriesListData: Country[] =
//     data?.countries.map((country: Country) => ({
//       ...country,
//       name: country.name.toLowerCase(),
//     })) ?? [];

//   return {
//     getAllCountriesListData,
//     hasGetAllCountriesListError,
//     isGetAllCountriesListLoading,
//   };
// };
