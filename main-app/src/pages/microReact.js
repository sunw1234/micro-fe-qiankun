import React from 'react';
import { loadMicroApp } from 'qiankun';

class MicroReact extends React.Component {
    containerRef = React.createRef();
    microApp = null;
  
    componentDidMount() {
      this.microApp = loadMicroApp({
        name: 'micro-app',
        entry: '//localhost:1489',
        container: this.containerRef.current,
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
    return (
      <>
        <div ref={this.containerRef}></div>
      </>
      
    );
  }
}

export default MicroReact;
