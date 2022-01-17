import './App.css';
import React, { useState } from 'react'
import PracticeNavbar from './components/PracticeNavbar';
import PracticeTextForm from './components/PracticeTextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import NoMatch from './components/NoMatch';

// import {
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [themeMode, setThemeMode] = useState("light")
  // const [switchMode, setswitchMode] = useState("Dark Mode")
  const [alert, setAlert] = useState(null)
  const [buttonBg, setButtonBg] = useState({
    backgroundColor: '#0d6ef'
  })
  const [textAreaCol, settextAreaCol] = useState({
    backgroundColor: 'white'
  })

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
          setAlert(null)
      }, 1500)
  }

  // const darkSwitch=()=>{
  //   if(themeMode==="light"){
      // setThemeMode("dark")
      // // setswitchMode("Dark Mode")
      // setButtonBg({
      //   backgroundColor: "#424e76"
      // })
      // settextAreaCol({
      //   backgroundColor: '#424e76'
      // })
      // document.body.style.backgroundColor = '#424e76'
      // document.body.style.color = 'white'
      // showAlert("Dark mode has been enabled", "success")
  //   }

  //   else{
  //     setThemeMode("light")
  //     setButtonBg({
  //       backgroundColor: "#4f4fcf",
  //       color: "white"
  //     })
  //     settextAreaCol({
  //       backgroundColor: 'white'
  //     })
  //     // setswitchMode("Light Mode")
  //     document.body.style.backgroundColor = 'white'
  //     document.body.style.color = 'black'
  //     showAlert("Light mode has been enabled", "success")
  //   }
  // }

  // const redSwitch=()=>{
    // if(themeMode==="light"){
      // setThemeMode("dark")
      // setButtonBg({
      //   backgroundColor: "red",
      //   color: 'black'
      // })
      // settextAreaCol({
      //   backgroundColor: 'red',
      //   color: 'black'
      // })
      // // setswitchMode("Dark Mode")
      // document.body.style.backgroundColor = 'red'
      // document.body.style.color = 'black'
      // showAlert("Red mode has been enabled", "success")
    //   }
  
  //   else{
  //     setThemeMode("light")
  //     setButtonBg({
  //       backgroundColor: "#4f4fcf",
  //       color: "white"
  //     })
  //     settextAreaCol({
  //       backgroundColor: 'white'
  //     })
  //     // setswitchMode("Light Mode")
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode has been enabled", "success")
  //   }
  // }


  // const greenSwitch=()=>{
  //   if(themeMode==="light"){
      // setThemeMode("dark")
      // setButtonBg({
      //   backgroundColor: "green",
      //   color: 'white'
      // })
      // settextAreaCol({
      //   backgroundColor: 'green',
      //   color: 'white'
      // })
      // // setswitchMode("Dark Mode")
      // document.body.style.backgroundColor = 'green'
      // document.body.style.color = 'white'
      // showAlert("Green mode has been enabled", "success")
  //   }
  
  //   else{
      // setThemeMode("light")
      // setButtonBg({
      //   backgroundColor: "#4f4fcf",
      //   color: "white"
      // })
      // settextAreaCol({
      //   backgroundColor: 'white'
      // })
      // // setswitchMode("Light Mode")
      // document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      // showAlert("Light mode has been enabled", "success")
  //   }
  // }


  const defaultSwitch=()=>{
    setThemeMode("light")
    setButtonBg({
      backgroundColor: "#4f4fcf",
      color: "white"
    })
    settextAreaCol({
      backgroundColor: 'white'
    })
    // setswitchMode("Light Mode")
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert("Dafault mode has been enabled", "success")
  }

  const darkSwitch=()=>{
    setThemeMode("dark")
    // setswitchMode("Dark Mode")
    setButtonBg({
      backgroundColor: "#424e76"
    })
    settextAreaCol({
      backgroundColor: '#424e76',
      color: 'white'
    })
    document.body.style.backgroundColor = '#424e76'
    document.body.style.color = 'white'
    showAlert("Dark mode has been enabled", "success")
  }

  const redSwitch=()=>{
    setThemeMode("dark")
    setButtonBg({
      backgroundColor: "red",
      color: 'black'
    })
    settextAreaCol({
      backgroundColor: 'red',
      color: 'black'
    })
    // setswitchMode("Dark Mode")
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'black'
    showAlert("Red mode has been enabled", "success")
  }
  const yellowSwitch=()=>{
    setThemeMode("dark")
    setButtonBg({
      backgroundColor: "#fbd82b",
      color: 'black'
    })
    settextAreaCol({
      backgroundColor: '#fbd82b',
      color: 'black'
    })
    // setswitchMode("Dark Mode")
    document.body.style.backgroundColor = '#fbd82b'
    document.body.style.color = 'black'
    showAlert("Yellow mode has been enabled", "success")
  }

  const greenSwitch=()=>{
    setThemeMode("dark")
    setButtonBg({
      backgroundColor: "green",
      color: 'white'
    })
    settextAreaCol({
      backgroundColor: 'green',
      color: 'white'
    })
    // setswitchMode("Dark Mode")
    document.body.style.backgroundColor = 'green'
    document.body.style.color = 'white'
    showAlert("Green mode has been enabled", "success")
  }



  
  return (
    <>
   <PracticeNavbar heading="TextUtils"  themeMode={themeMode} darkSwitch={darkSwitch} redSwitch={redSwitch} greenSwitch={greenSwitch} defaultSwitch={defaultSwitch} yellowSwitch={yellowSwitch}/>
   <Alert alert={alert}/>
   
      
  


      <Routes>
        <Route exact path='/' element={<PracticeTextForm themeMode={themeMode} showAlert={showAlert} buttonBg={buttonBg} textAreaCol={textAreaCol}/>}></Route>
        <Route exact path='about' element={<About />}></Route>
        <Route exact path='*' element={<NoMatch/>}></Route>
      </Routes>

   {/* <About/> */}
   </>
  )
}

export default App;
