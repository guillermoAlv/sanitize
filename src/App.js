import './App.css';
import React, { useState } from 'react';
import RawEventPage from './components/RawEventPage'



function App() {
  const [content, setContent] = useState([])
  if (content.length === 0){
    fetch('https://vtn44sn818.execute-api.eu-west-1.amazonaws.com/Prod/sanitize-raw').then(response => response.json()).then(data => ter(data));
  }else{
    console.log(content)
  }
  function ter(dt){
    setContent(dt['events'])
  }
  return (<RawEventPage/>);
}

export default App;
