import './App.css';
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';
import Login from './components/login/Login';


// const user = null;
const user = "abc";
function App() {
  // const [count, setCount] = useState(0)

  // const user = null;
  // const user = "abc";

  
  return (
    <>
      <>
        {
          !user ? (<Login />) : (
            <div className='app_wrapper'>
            <Header />
            <div className="app_body">
             <Sidebar />
             <Feed />
             <Widget />
            </div>
          </div>

          )
        }
        {/* .......................................................... */}
        {/* <div className='app_wrapper'>
          <Header />
          <div className="app_body">
           <Sidebar />
           <Feed />
           <Widget />
          </div>
        </div> */}
        {/* .......................................................... */}

      </>
    </>
  )
}

export default App
