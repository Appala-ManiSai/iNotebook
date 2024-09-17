import './App.css';
import {
  BrowserRouter as Router,
  Routes,  // Replace Switch with Routes
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <NoteState>
    <Router>
      <Navbar />
      <Alert message="This is amazing React course"/>
      <div className='container'>

      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Use 'element' prop instead of nesting */}
        <Route path="/about" element={<About />} />  {/* No need for 'exact' in v6 */}
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
