import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';


function App() {
  // const [count, setCount] = useState(0)

  return (
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

export default App
