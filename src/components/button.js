import React from 'react';

export default (props) => {
  let style = props.quality === 'GOOD' ? 'button button-green center' : 'button button-red center';

  return (
    <div className={style}>
        {props.quality}
    </div>
  )
}