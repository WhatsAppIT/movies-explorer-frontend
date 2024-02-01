import React from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const {
    checkBox,
    setCheckBox,
    filterMoviesInSearch,
    pageCheckBox,
    setPageCheckBox,
    pageShortSearch,
  } = props;
  const location = useLocation();

  if (location.pathname === "/movies") {
    return (
      <form className='form__filter'>
        <div className='form__filter_input'>
          <input
            className='form__checkbox_input'
            type='checkbox'
            checked={checkBox}
            onClick={filterMoviesInSearch}
            onChange={() => setCheckBox((prev) => !prev)}
          ></input>
        </div>
        <label className='form__filter_title'>Короткометражки</label>
      </form>
    );
  }

  if (location.pathname === "/saved-movies") {
    return (
      <form className='form__filter'>
        <div className='form__filter_input'>
          <input
            className='form__checkbox_input'
            type='checkbox'
            checked={pageCheckBox}
            onClick={pageShortSearch}
            onChange={() => setPageCheckBox((res) => !res)}
          ></input>
        </div>
        <label className='form__filter_title'>Короткометражки</label>
      </form>
    );
  }
}

export default FilterCheckbox;
