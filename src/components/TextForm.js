import React, {useState} from "react";

export default function TextForm(props) {

    const changeText=(event)=>{
        console.log('changed');
        setText(event.target.value)
    }

    const toUpCase=()=>{
        console.log('Up clicked')
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowCase=()=>{
        console.log('Low clicked')
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
        console.log('cleared')
        setText("");
    }

    const [myStyle, setmyStyle] = useState({
            fontWeight: "400",
            backgroundColor: props.mode==='dark'? 'gray':'white',
            color: props.mode==='dark'?'white': 'black'
    })
    // const boldText=()=>{
        
    //     if(myStyle.fontWeight==="400"){
        // setmyStyle({
        //     fontWeight: "bold",
        //     backgroundColor: props.mode==='dark'? 'gray':'white',
        //     color: props.mode==='dark'?'white': 'black'
        // });
        // console.log('bold')
    //   }
    //     else{
    //       setmyStyle({
    //         fontWeight: "400",
    //         backgroundColor: props.mode==='dark'? 'gray':'white',
    //         color: props.mode==='dark'?'white': 'black'
    //     })
    //     console.log('normal')
    //     }
    // }

    const copyText=()=>{
      console.log("copy");
      var copy = document.getElementById('myBox')
      copy.select();
      navigator.clipboard.writeText(copy.value)

    }

    const RemExtraSpace=()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }

    // const myColor=()=>{
    //     var x = 0;
    //     let y = String(myStyle. color[x])
    //     setmyStyle({
    //         color: y
    //     });
    //     console.log(x)
    //     x = 1;
    // }
     
    // const myColor=()=>{
    //     myStyle.color.forEach(function(value){
    //         let x = String(value)
    //         setmyStyle({
    //             color: x
    //         })
    //     })
    // }

    const [text, setText] = useState("")
  return (
    <>
      <div className="container my-4" style={{
            backgroundColor: props.mode==='dark'? '#424e76':'white',
            color: props.mode==='dark'?'white': 'black'
        }}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control my-2" style={{
            backgroundColor: props.mode==='dark'? '#424e76':'white',
            color: props.mode==='dark'?'white': 'black',
        }}  id="myBox" rows="8" value={text} onChange={changeText}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={toUpCase}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={toLowCase}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
          {/* <button className="btn btn-primary mx-1" onClick={boldText}>Bold Text</button> */}
          <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={RemExtraSpace}>Remove Extra Spaces</button>
          {/* <button className="btn btn-primary mx-1" id="changeColor" onClick={myColor}>Change Color</button> */}
        </div>
        <div className="container" style={{
            backgroundColor: props.mode==='dark'? '#424e76':'white',
            color: props.mode==='dark'?'white': 'black',
        }}>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>chars</b></p>
            <p>{text.split(" ").length * 0.008} <b>minutes read</b></p>

            <h2>Preview :</h2>
            <p>{text}</p>
        </div>
    </>
  );
}
