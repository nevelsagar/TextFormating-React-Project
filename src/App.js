import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';




function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
});
setTimeout(()=>{
  setAlert(null)
},2000)
  }





const toggleMode=()=>{



if(mode==="light"){
  setMode("dark");
  document.body.style.backgroundColor="#042743";
  showAlert("Dark Mode has been Enable","success");
// setInterval(()=>{
  // document.title="TextUtils-Dark Mode";

// },1000);
// setInterval(()=>{
  
//   document.title="TextUtils-Dark hhhhhhh Mode";
// },1500);
document.title="TextUtils-Dark Mode";

  
} 
else{
  setMode("light");
  document.body.style.backgroundColor="white";
  showAlert("Light Mode has been Enable","success")
  document.title="TextUtils-Light Mode";
} 
  
}

  return (
    <>
<Router>

<Navbar title="TextUtiles" aboutText="About TextUliles" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
  <Routes>

<Route path='/' element={<TextForm heading="Try TextUtility-Word counter,character counter,Remove Extra Spaces" mode={mode} showAlert={showAlert}/>} />
<Route path='/about' element={<About mode={mode}  /> }/>

  </Routes>


</div>


    </Router>
    </>
  );
}

export default App;
