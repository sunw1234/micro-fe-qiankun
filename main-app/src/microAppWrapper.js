import { loadMicroApp } from 'qiankun';
import React from 'react';

class MicroAppWrapper extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    console.log('>>>>>>about')
    this.microApp = loadMicroApp({
      name: 'micro1', // app name
      entry: '//localhost:8090',
      container: '#app1',
      props: { brand: 'qiankun' },
    });
  }

  componentWillUnmount() {
    this.microApp.unmount();
  }

  componentDidUpdate() {
    this.microApp.update({ name: 'kuitos' });
  }

  render() {
    return <div ref={this.containerRef}></div>;
  }
}

export default MicroAppWrapper;
