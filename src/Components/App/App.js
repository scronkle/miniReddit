import logo from '../../logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { Reddit } from '../../Util/Reddit';
import Feed from '../Feed/Feed';
import React, {useState} from 'react';
import Directory from '../Directory/Directory';

function App() {
  const [path, setPath] = useState('home')
  const pageData = Reddit.mockFetch(path)


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="body-container">
        <div className='side-panel'>
          <Directory path={path} setPath={setPath}/>
        </div>
        <Feed posts={pageData.data.children}/>
        <div className='side-panel'></div>
      </div>
    </div>
  );
}

export default App;
