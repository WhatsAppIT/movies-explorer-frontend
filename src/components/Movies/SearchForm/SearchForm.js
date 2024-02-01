import React from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import search from "../../../images/find-3.svg";

function SearchForm(props) {
  const {
    searchForm,
    setSearchForm,
    checkBox,
    setCheckBox,
    filterMoviesInSearch,
    savedMovieActive,
    pageSearch,
    setSearchArray,
    searchAllMovies,
    pageSearchForm,
    setPageSearchForm,
    pageSearchAllMovies,
    setPageSearchArray,
    setPageCheckBox,
    pageCheckBox,
    pageShortSearch,
    setfindMovies,
    setPageSaveMovies,
    pageSearchAfterSearc,
    setIsLoading,
    handleGetMoviesFromApi,
  } = props;

  const location = useLocation();

  //MOVIES SUBMIT
  function handleSubmitSearchForm(e) {
    e.preventDefault();

    setSearchArray(searchAllMovies);
    console.log("handleSubmitSearchForm");
  }

  //SAVE-MOVIES SUBMIT
  function handlePageSubmitSearchForm(e) {
    e.preventDefault();

    pageSearchAfterSearc();
    setPageSaveMovies(pageSearchAllMovies);
    console.log("handlePageSubmitSearchForm");
  }

  if (location.pathname === "/movies") {
    return (
      <div className='search'>
        <form className='formSearch' onSubmit={handleSubmitSearchForm}>
          <div className='form__search'>
            <input
              className='form__search_input'
              type='text'
              name='search'
              placeholder='Фильм'
              id='search'
              autoComplete='off'
              required
              value={searchForm}
              onChange={(e) => setSearchForm(e.target.value)}
            />
            <button type='submit' className='form__search_submit'>
              <img src={search} className='form__search_submit_img' />
            </button>
          </div>
        </form>
        <FilterCheckbox
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          filterMoviesInSearch={filterMoviesInSearch}
        />
      </div>
    );
  }

  if (location.pathname === "/saved-movies") {
    return (
      <div className='search'>
        <form className='formSearch' onSubmit={handlePageSubmitSearchForm}>
          <div className='form__search'>
            <input
              className='form__search_input'
              type='text'
              name='search'
              placeholder='Фильм'
              id='PageSearch'
              autoComplete='off'
              required
              value={pageSearchForm}
              onChange={(e) => setPageSearchForm(e.target.value)}
            />
            <button type='submit' className='form__search_submit'>
              <img src={search} className='form__search_submit_img' />
            </button>
          </div>
        </form>
        <FilterCheckbox
          setPageCheckBox={setPageCheckBox}
          pageCheckBox={pageCheckBox}
          pageShortSearch={pageShortSearch}
        />
      </div>
    );
  }
}

export default SearchForm;
