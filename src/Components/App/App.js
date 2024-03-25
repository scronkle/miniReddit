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
  const [pathHistory, setPathHistory] = useState(['home'])
  const [feedPosts, setFeedPosts] = useState([])
  const [postInfo, setPostInfo] = useState({})
  const [view, setView] = useState('feed')
  

  //updates display to show info from the new path
  function updateView() {
    Reddit.fetch(path).then((result)=>{
      //check if current response is for a feed or a single post
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

  //adds last path to history (for when user navigates to new post/feed)
  function updateHistory(newPath) {
    console.log(`adding ${newPath} to:`)
    console.log(pathHistory)
    setPathHistory([newPath, ...pathHistory])
  }

  function navigate(newPath) {
    console.log(`add ${path} to history`)
    updateHistory(path)
    setPath(newPath)
  }

  function navigateHistory(direction) {
    if (direction === 'back') {
      setPath(pathHistory[0])
    }
  }
  
  //when path changes, update view (and update history?)
  useEffect(()=>{
    updateView()
    console.log(path)
  }, [path])

  useEffect(()=>{
    console.log('current History')
    console.log(pathHistory)
  }, [pathHistory])




  //adjust body display for feed/post view
  function bodyCheck() {
    if (view === 'feed') {
      return <Feed posts={feedPosts} setPath={navigate}/>
    } else {
      return <FullPost postInfo={postInfo}/>
    }
  }


  


  return (
    <div className="App">
      <header className="App-header">
        <NavBar navigateHistory={navigateHistory}/>
      </header>
      <div className="body-container">
        <div className='side-panel'>
          <SearchBar/>
          <Directory path={path} setPath={navigate}/>
        </div>
        {bodyCheck()}
        <div className='side-panel'></div>
      </div>
    </div>
  );
}

export default App;
