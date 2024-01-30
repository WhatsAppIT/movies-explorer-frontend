import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { isChecked, onChange, onSubmit } = props;
  return (
    <form className='form__filter'>
      <div className='form__filter_input'>
        <input
          className='form__checkbox_input'
          type='checkbox'
          checked={isChecked}
          onSubmit={isChecked && onSubmit}
          onChange={() => onChange((prev) => !prev)}
        ></input>
      </div>
      <label className='form__filter_title'>Короткометражки</label>
    </form>
  );
}

export default FilterCheckbox;
