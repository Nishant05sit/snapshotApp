import React from 'react';
import {useState, useEffect} from 'react';
import {LoadImages,SearchImages} from './component/api'
import './App.css';
import Image from './component/image'

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages();
  const search = () => {
    setSearch(query)
  }
  const searchData = SearchImages(searchQ);
  console.log(SearchImages(searchData))
  return (
    <div className="App">
      <div><h1>SnapShot Search</h1></div>
      <div className="custom">
        <input type="text" onChange={(event) => setQuery(event.target.value)} placeholder="Enter"/>
        <button onClick={search} > Search</button>
      </div>
      <div className="contain">
        {searchQ ? searchData.map((img, key) => (
          <Image src={img.urls.thumb}  key={key}/>
           )) : data.map((img, key) => (
          <Image src={img.urls.thumb}  key={key}/>
        ))}
      </div>
    </div>
  );
}

export default App;
