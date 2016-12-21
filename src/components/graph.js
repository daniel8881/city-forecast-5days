import React from 'react';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

const Graph = (props) => {
  return (
    <div className='panel-main-chart'>
      <Sparklines data={props.data} margin={0} limit={40}>
        <SparklinesCurve style={{ stroke: "#555960", fill: "#555960", fillOpacity: "1" }}  />
      </Sparklines>
    </div>
  )
}

export default Graph;