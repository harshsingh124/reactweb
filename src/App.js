import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React , {useState} from 'react'
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showalert = (messege , type) =>{
    setAlert( {
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removecolor = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toogle = (cls) =>{
    // console.log(cls)
    removecolor()
document.body.classList.add('bg-'+cls)

    if(mode  === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode Enabled", "success");
      document.title = 'AnimeFlex - Dark Mode';
   
    }
    else{
      setMode("light")
            document.body.style.backgroundColor = "white";
           showalert("Light Mode Enabled", "success");
           document.title = 'AnimeFlex - Light Mode';
      }
  }
  return (

    <>
        <Router>
      <Navbar tag="prop" mode={mode} toogle={toogle} about={"About"} />
      <Alert alert={alert}/>
      <div className="container " style={{height:'50px'}}>
        <Switch>
         <Route  path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextArea showalert={showalert} text="Enter the text To Analyse :-" heading="Form" mode={mode} /> 
          </Route>
     </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
