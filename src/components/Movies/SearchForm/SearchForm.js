import React from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import search from "../../../images/find-3.svg";

function SearchForm() {
  const [searchForm, setSearchForm] = React.useState("");

  function handleSubmitSearchClick(e) {
    e.preventDefault();
  }

  function handleCheckBoxClick(e) {
    e.preventDefault();
  }

  return (
    <div className='search'>
      <form className='formSearch' onSubmit={handleSubmitSearchClick}>
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
          <button type='submit' className='form__search_submit'>
            <img src={search} className='form__search_submit_img' />
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
