import React from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import search from "../../../images/find-3.svg";

function SearchForm(props) {
  const {
    searchForm,
    setSearchForm,
    searchMovies,
    isLoading,
    filteredMovies,
    handleSubmitSearchForm,
    setFilterSearchMovies,
    filterSearchMovies,
  } = props;

  return (
    <div className='search'>
      <form className='formSearch' onSubmit={handleSubmitSearchForm}>
        <div className='form__search'>
          <input
            className='form__search_input'
            type='search'
            placeholder='Фильм'
            id='search'
            autoComplete='off'
            required
            value={searchForm}
            onChange={(e) => setSearchForm(e.target.value)}
          />
          <button
            type='submit'
            className='form__search_submit'
            onClick={handleSubmitSearchForm}
          >
            <img src={search} className='form__search_submit_img' />
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
