import { gql } from "@apollo/client";

const useGetCountryListQuery = gql`
  query ListCountriesWithSearchTerm($searchTerm: String!) {
    countries(filter: { name: { contains: $searchTerm } }) {
      name
      code
    }
  }
}
`;
