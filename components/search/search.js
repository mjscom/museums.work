import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";

import AutoComplete from "./autocomplete";

const searchClient = algoliasearch(
  process.env.ALG_PUB,
  process.env.ALG_PUB_KEY
);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={process.env.ALG_IND}>
    <AutoComplete />
  </InstantSearch>
);

export default Search;
