import "./Search.css";

const Search = ({ handleFormSubmit, setSearchValue, searchValue }) => {
  
  return (
    <div class="wrap">
      <form onSubmit={handleFormSubmit}>
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search your images here..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            required="required"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
