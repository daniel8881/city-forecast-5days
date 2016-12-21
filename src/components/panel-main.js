import React from 'react';
import axios from 'axios';
import Graph from './graph'
import _ from 'lodash';
import Button from './button';

const url = `http://play.grafana.org/api/datasources/proxy/2/query?db=site&q=SELECT%20mean(%22value%22)%20FROM%20%22logins.count%22%20WHERE%20%22hostname%22%20%3D%20'server1'%20AND%20time%20%3E%20now()%20-%2024h%20GROUP%20BY%20time(10m)%2C%20%22hostname%22%3BSELECT%20mean(%22value%22)%20FROM%20%22logins.count%22%20WHERE%20time%20%3E%20now()%20-%2024h%20GROUP%20BY%20time(10m)&epoch=ms`;


class PanelMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        time: [],
        name: '',
        avg: 0
      }
    }
  }

  handleData(data) {
    let values = data.results[0].series[0].values;
    let serverName = data.results[0].series[0].tags.hostname;
    let valuesArray = values.map(value => value[1]);
    let avg = _.round(_.sum(valuesArray)/valuesArray.length);
    return {
      time: valuesArray,
      name: serverName,
      avg: avg
    };
    
  }

  componentWillMount() {
    return axios.get(url)
            .then(res => this.handleData(res.data))
            .then(data => this.setState({ data }))
  }

  render() {
    const data = this.state.data;
    const quality = data.avg > 100 ? 'BAD' : 'GOOD';
    return (
      <div className='panel-main'>
        <div className='panel-main-content'>
          <h1 className='panel-main-content-title'>{data.name}</h1>
          <p className='panel-main-content-description'>
            {`LAST 24 HRS RESPONSE TIME - ${data.avg} MS`}
          </p>
          <Button quality={quality} />
        </div>
        <Graph data={data.time} />
      </div>
    )
  }
}

export default PanelMain;