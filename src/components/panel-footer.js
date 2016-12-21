import React from 'react';

export default (props) => {
  return (
    <div className='panel-footer'>
      <ul>
        <li className='panel-footer-item'>
          <img src='images/stack.svg' className='panel-footer-item-icon' />
          <p>Stack: 3</p>
        </li>
        <li className='panel-footer-item'>
          <img src='images/cube.svg' className='panel-footer-item-icon' />
          <p>Containers: 5</p>
        </li>
        <li className='panel-footer-item'>
          <img src='images/danger.svg' className='panel-footer-item-icon' />
          <p>Alerts: 0</p>
        </li>
      </ul>
    </div>
  )
}