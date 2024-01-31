import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { checkBox, setCheckBox, filterMoviesInSearch } = props;
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

export default FilterCheckbox;
