import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container my-3'>
        <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter the Text to Analyze" showAlert={showAlert}/>} />
        <Route exact path="about" element={<About toggleMode={toggleMode}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
