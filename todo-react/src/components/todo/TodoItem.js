import React from 'react'


export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox"
        defaultChecked={props.isCompleted}/>
      {props.name}
    </li>
  );
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}