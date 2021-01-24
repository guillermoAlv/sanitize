import './App.css';
import React, { useEffect, useState } from 'react';
import RawEventPage from './components/RawEventPage'



function App() {
  //const [content, setContent] = useState([])
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true);
    fetch("https://vtn44sn818.execute-api.eu-west-1.amazonaws.com/Prod/sanitize-raw")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data['events'][0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (<RawEventPage event={todo}/>)}
    </>
  );
}

export default App;
