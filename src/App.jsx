
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app_wrapper'>
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
