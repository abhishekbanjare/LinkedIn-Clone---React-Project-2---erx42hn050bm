import './App.css';
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';


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
