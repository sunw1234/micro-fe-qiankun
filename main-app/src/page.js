import React from 'react';
import { Link } from 'react-router-dom';
import { loadMicroApp } from 'qiankun';



class Page extends React.Component {

  render() {
    return (
      <>
        主页<br/>
        <Link to="/microReact">切换至React子应用</Link>
        <br/>
        <Link to="/microVue">切换至Vue子应用</Link>
      </>
      
    );
  }
}

export default Page;
