import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleChange = partial(props.handleChange, props.id);
  return (
    <li>
      <input type="checkbox"
        checked={props.isComplete}
        onChange={handleChange}/>
      {props.name}
    </li>
  );
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}