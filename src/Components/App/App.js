import logo from '../../logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { Reddit } from '../../Util/Reddit';
import Feed from '../Feed/Feed';
import React, {useState} from 'react';
import Directory from '../Directory/Directory';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect } from 'react';

function App() {
  const [path, setPath] = useState('best')
  const [feedPosts, setFeedPosts] = useState([])
  
  function updateFeed() {
    Reddit.fetch(path).then((result)=>setFeedPosts(result.data.children))
  }
  
  
  useEffect(()=>{
    updateFeed()
  }, [path])
  



  


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="body-container">
        <div className='side-panel'>
          <SearchBar/>
          <Directory path={path} setPath={setPath}/>
        </div>
        <Feed posts={feedPosts}/>
        <div className='side-panel'></div>
      </div>
    </div>
  );
}

export default App;
