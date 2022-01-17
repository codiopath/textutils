import React from 'react'
import { Link } from 'react-router-dom'

export default function PracticeNavbar(props) {
  
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.themeMode} bg-${props.themeMode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          


        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          

        </li>
    </ul>
    



      {/* <div className={`form-check form-switch text-${props.themeMode==='light'? 'green': 'light'}`}>
  <label className="form-check-label" htmlFor="greenSwitch">Green Mode</label>
  <input className="form-check-input" type="checkbox" role="switch" id="greenSwitch" onClick={props.greenSwitch}/>
</div>
      <div className={`form-check form-switch text-${props.themeMode==='light'? 'red': 'light'} mx-3`}>
  <label className="form-check-label" htmlFor="redSwitch">Red Mode</label>
  <input className="form-check-input" type="checkbox" role="switch" id="redSwitch" onClick={props.redSwitch}/>
</div>
      <div className={`form-check form-switch text-${props.themeMode==='light'? 'dark': 'light'} mx-3`}>
  <input className="form-check-input" type="checkbox" role="switch" id="mySwitch" onClick={props.darkSwitch}/>
  <label className="form-check-label" htmlFor="mySwitch">Dark Mode</label>
</div> */}

<div className={`form-check text-${props.themeMode==='light'? 'dark': 'light'}`}>
  <input className="form-check-input" type="radio" name="exampleRadios" id="defaultSwitch" value="option1" onClick={props.defaultSwitch} />
  <label className="form-check-label" htmlFor="defaultSwitch">
    Default mode
  </label>
  </div>
  <div className={`form-check text-${props.themeMode==='light'? 'dark': 'light'}`}>
  <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="darkSwitch" value="option5" onClick={props.darkSwitch} style={{backgroundColor:'#424e76'}}/>
  <label className="form-check-label" htmlFor="darkSwitch" style={{color:'#424e76'}}>
    Dark mode
  </label>
  </div>
<div className={`form-check text-${props.themeMode==='light'? 'dark':'light'}`}>
  <input className={"form-check-input mx-2"} type="radio" name="exampleRadios" id="yellowSwitch" value="option2" onClick={props.yellowSwitch} style={{backgroundColor:'#fbd82b'}}/>
  <label className="form-check-label" htmlFor="yellowSwitch" style={{color:'#fbd82b'}}>
    Yellow mode
  </label>
  </div>
<div className={`form-check text-${props.themeMode==='light'? 'dark':'light'}`}>
  <input className={"form-check-input mx-2"} type="radio" name="exampleRadios" id="greenSwitch" value="option3" onClick={props.greenSwitch} style={{backgroundColor:'green'}}/>
  <label className="form-check-label" htmlFor="greenSwitch" style={{color:'green'}}>
    Green mode
  </label>
  </div>
<div className={`form-check text-${props.themeMode==='light'? 'dark': 'light'}`}>
  <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="redSwitch" value="option4" onClick={props.redSwitch} style={{backgroundColor:'red'}}/>
  <label className="form-check-label" htmlFor="redSwitch" style={{color:'red'}}>
    Red mode
  </label>
  </div>





    </div>
  </div>
</nav>
        </div>
    )
}
