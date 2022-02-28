import Buttons from './components/Buttons'
import BreakingNews from './components/BreakingNews'
import News from './components/News'
import Sidebar from './components/SideNewsBar'
import './App.css';



function App() {

  return (
    <div className="App">
      <body>
        <Buttons/>          
            <BreakingNews/>
                <div className="Main-container">                        
              <News/>                     
            <Sidebar/>                       
          </div>
      </body> 
    </div>
  );
}

export default App;
