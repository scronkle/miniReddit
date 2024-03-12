import logo from '../../logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { Reddit } from '../../Util/Reddit';
import Feed from '../Feed/Feed';
import React, {useState} from 'react';
import Directory from '../Directory/Directory';
import SearchBar from '../SearchBar/SearchBar';
import FullPost from '../FullPost/FullPost';
import { useEffect } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [path, setPath] = useState('best')
  const [feedPosts, setFeedPosts] = useState([])
  const [postInfo, setPostInfo] = useState({})
  const [view, setView] = useState('feed')
  
  function updateView() {
    Reddit.fetch(path).then((result)=>{
      if (Array.isArray(result)) {
        setView('fullPost')
        setPostInfo(result)
      } else {
        setView('feed')
        setFeedPosts(result.data.children)
      }
      console.log(view)
    })
  }
  
  
  useEffect(()=>{
    updateView()
    console.log(path)
  }, [path])



  function bodyCheck() {
    if (view === 'feed') {
      return <Feed posts={feedPosts} setPath={setPath}/>
    } else {
      return <FullPost postInfo={postInfo}/>
    }
  }


  


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
        {bodyCheck()}
        <div className='side-panel'></div>
      </div>
    </div>
  );
}

export default App;
