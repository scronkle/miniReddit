import logo from '../../logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { Reddit } from '../../Util/Reddit';
import Feed from '../Feed/Feed';

function App() {
  const pageData = Reddit.mockFetch()


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="body-container">
        <Feed posts={pageData.data.children}/>
      
      </div>
    </div>
  );
}

export default App;
