import React from 'react';
import {loadMicroApp, registerMicroApps, start} from 'qiankun' 

class MicroVue extends React.Component {
  
    // componentDidMount() {
    //   registerMicroApps(
    //     [
    //      {
    //         name:'vue-demo', //微应用的名称，微应用之间必须确保唯一(微应用中package.json中的name)
    //         entry:'//localhost:8080', //微应用的entry地址
    //         container:'#subapp-container',//微应用的容器节点的选择器
    //         activeRule:'/microVue'//微应用的激活规则
    //      },
    //     ]
    //    )
    //    start({prefetch:'all'}) //启动，配置all则主应用start后即开始预加载所有微应用静态资源
    // }
    containerRef = React.createRef();
    microApp = null;
  
    componentDidMount() {
      this.microApp = loadMicroApp({
        name: 'vue-demo',
        entry: '//localhost:8080',
        container:'#subapp-container',//微应用的容器节点的选择器
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
        <div>
            <div id='subapp-container' />
        </div>
      </>
      
    );
  }
}

export default MicroVue;
