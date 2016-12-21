import React from 'react';
import PanelMain from './panel-main';
import PanelFooter from './panel-footer';


class Panel extends React.Component {
  render() {   
    return (
      <div className='panel'>
        <PanelMain />
        <PanelFooter /> 
      </div>
    )
  }
}

export default Panel;