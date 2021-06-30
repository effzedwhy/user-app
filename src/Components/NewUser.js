import React from 'react'
import './NewUser.css'

function NewUser (props) {
  return (
    <div className='user-data'>
      <ul>
        {props.users.map((data) => (
          <li className="list">
            {data.name} ({data.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewUser
