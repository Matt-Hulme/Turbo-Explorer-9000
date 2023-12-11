# The Turbo-Explorer-9000

### Project Setup

- 'yarn create turbo-explorer-9000 --template react-ts'
- 'yarn add' apollo, graphql, unocss, unocss-preset-default, --dev typescript
- Cleared out vite default files
- Setup Simple Components

### Packages Used

- apollo/GQL: to make the queries
- UnoCss: styling and practice
- classNames: to conditionally apply styling to elements like SearchBar

### Cool Things Added

- Accounted for case-sensitivity in the SearchBar component so user could capitalize the searchTerm however and the query would work
- Keyboard accessible Search function (handleSearch on enter press)
- Loading/Error/Empty States for both queries
- useLazyQuery for both queries since they are button-triggered queries
- Input validation/a tooltip telling the user to "enter a country" if searchTerm is blank
- Conditional classNames on searchBar to raise the SearchBar when showing results (This was mostly me wanting to avoid routing, but this ended up making HomePage and SearchResultsPage kind of being 1 smushed component, when they should have been two separate components (more on this later))

### Cool Things Learned

- How to useLazyQuery
- Keypress functionality (calling query when hitting 'Enter')
- that classNames was a package, and how it pairs well with UnoCss
- Always plan routing logic first!!!!!!

### Challenges Ran Into

- When first querying for CountryNamesList, I ran into case-sensitivity issues (query was expecting 'Mexico' but user input was 'mexico').
  - At first I solved this by fetching for the entire countries array, lowercasing all country names, and filtering that array for a lowercased searchTerm, then rendering the filtered array.
  - I later decided against fetching the entire CountryNamesList. While in this scenario, the dataset was small enough that I could get away with querying the entire CountryNamesList every time (without long loading times), I thought it best practice to only query for the countries where countries.name started with the search term, and used regex to convert the searchTerm input to always match what the query was expecting
- In cases where the 'CountryNameList' was only 1 country (the user types in 'mexico' for example), I wanted the CountryDetailsModal to automatically render, rather then having the user click through on a single returned card.
  - I was having a difficult time tying the 'isModalVisible' state to the 'getCountriesListData.length === 1' case., since 'isModalVisible' was a prop that existed in the child component, and the conditional render logic was in the parent component. I was getting some infinite looping errors. Ended up abandoning that functionality.
- Because I hadn't build 'SearchResultsPage' as a separate component, trying to add useSearchParams caused some big issues. If I re-did this project I would route to a separate 'SearchResultsPage' page instead of rendering the CountryNameList on the HomePage. (more details in notes.txt)
