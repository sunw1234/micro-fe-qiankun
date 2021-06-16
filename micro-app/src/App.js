import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  console.log('载入子应用')
  return (
    <div className="App">
      子应用
      {/* <button onClick={() => props.history.push('/about')}>跳转</button> */}
    </div>
  );
}

export default withRouter(App);
