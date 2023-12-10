# The Turbo-Explorer-9000

### Project Setup

- 'yarn create turbo-explorer-9000 --template react-ts'
- 'yarn add' apollo, graphql, unocss, unocss-preset-default, --dev typescript
- cleared out vite default files (index.css, etc.)
- Sstup Simple Components

### Packages Used

- apollo/GQL: to make the queries
- UnoCss: styling and practice
- react-router: in case I wanted to add routing (PROBABLY SHOULD REMOVE)
- classNames: to conditionally apply styling to elements like SearchBar

### Cool Things Added

- Accounted for case-sensitivity in the SearchBar component so user didn't have to match the country capitalization exactly
- Keyboard accessible Search function (enter onKeyDown)
- Loading/Error/Empty States for 2 queries
- useLazyQuery for both queries since they are button-triggered queries
- conditional classNames on searchBar to raise the SearchBar when showing results

### Cool Things Learned

- I learned you can nest ternaries to account for various error/loading/empty conditional render paths
- I learned about Keypress functionality (calling query when hitting 'Enter')
- I didn't know classNames was a package, but it is really useful with UnoCss

### Challenges Ran Into

- When first querying for CountryNamesList, I ran into case-sensitivity issues (query was expecting 'Mexico' but user input was 'mexico').
  - At first I solved this by fetching for the entire countries array, and filtering (searchTerm), then rendering that filtered array.
  - I later decided against fetching the entire CountryNamesList. While in this scenario, the dataset was small enough that I could get away with querying the entire CountryNamesList every time (without long loading times), I thought it best practice to only query the countries actually included in the search term, and used regex to convert the searchTerm to match what the query was expecting
- In cases where the 'CountryNameList' was only 1 country (the user types in 'mexico' for example), I wanted the CountryDetailsModal to automatically render, rather then having the user click through on a single returned card.
  - I was having a difficult time tying the 'isModalVisible' state to the 'getCountriesListData.length === 1' case., since 'isModalVisible' was a prop that existed in the child component, and I was getting some infinite looping errors.
