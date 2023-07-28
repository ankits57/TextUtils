import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';

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
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container my-3'>
        <TextForm heading = "Enter the Text to Analyze" showAlert={showAlert}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
