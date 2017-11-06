import React from 'react';

const RadioButton = (props) => (
  <div>
    <span>
      <input
          type="radio"
          value = {props.value}
          id = {props.value}
          name = {props.group}
          disabled = {props.disabled}
          onClick={(event) => {
            props.onClick(event);
          }}
      />
      <label>{props.label}</label>
    </span>
  </div>
);

export default RadioButton;