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
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <NoteState>
    <Router>
      <Navbar />
      <Alert alert={alert}/>
      <div className='container'>

      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home showAlert={showAlert} />} />  {/* Use 'element' prop instead of nesting */}
        <Route path="/about" element={<About />} />  {/* No need for 'exact' in v6 */}
        <Route path="/login" element={<Login showAlert={showAlert} />} /> 
        <Route path="/signup" element={<Signup showAlert={showAlert} />} /> 
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
