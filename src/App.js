
import './App.css';
import Header from './Header';
import Video from './vidoe';
import News from './News';
//import TobBar from './TopBar';

function App() {
  return (
    <div className="App" style ={{backgroundColor:"black", color:"white", paddingBottom:"30px"}}>
      <Header/>
      <Video/>
      <News/>
     
          

    </div>
  );
}

export default App;
