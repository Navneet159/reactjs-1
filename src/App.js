import React from 'react';
import { useState } from 'react';
import './App.css';



function App() {

  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // setSec(sec + 1);

  // function Timerstart(){

  // }

  // const interval = setInterval(() => {
  //   setSec(sec + 1);
  //   if (sec === 60) {
  //     setSec(0);
  //     setMin(min + 1);
  //     if (min === 60) {
  //       setMin(0);
  //       setHr(hr + 1);
  //     }
  //   }
  //   clearInterval(interval);
  // }, 1000);


  // function Timerstart() {
  //   const interval = setInterval(() => {
  //     setSec(sec + 1);
  //     if (sec === 59) {
  //       setSec(0);
  //       setMin(min + 1);
  //       if (min === 59) {
  //         setMin(0);
  //         setHr(hr + 1);
  //       }
  //     }
  //     clearInterval(interval);
  //     console.log(interval);
  //   }, 1000)
  // }

  function Timerstart() {
    const interval = setInterval(() => {
      // console.log("timer function");
      // setSec(sec + 1)
      setSec(prevSec => prevSec + 1)
      // console.log("this is sec")
      sec.setState = prevSec;
      if (prevSec == prevSec + 4) {
        console.log("5");
      }

      // console.log({ sec })
      // console.log("this is prevSec")
      // console.log({ prevSec })

    }, 1000);
    return () => {
      window.clearInterval(interval);
    };

  }


  // return () => clearInterval(interval);



  return (
    <div className="App">

      <div className='hr'>
        {hr}:
      </div>
      <div className='min'>
        {min}:
      </div>
      <div className='sec'>
        {sec}
      </div>
      <div className='button'>
        <button onClick={Timerstart} > Start</button>
      </div>


    </div>
  )



  // setInterval(() => {
  //   setSec(sec+1);
  //   // if(sec===60){
  //   //   setSec(0);
  //   //   setMin(min+1);
  // //     if(min===60){
  // // setMin(0);
  // // setHr(hr+1);
  // //     }
  //   }
  // }, 1000);

  // const [variable, function] = useState(variable = value) 


  // return (
  //   <div className="App">
  //     {/* <div className='hr'>
  //       {hr}:
  //     </div>
  //     <div className='min'>
  //       {min}:
  //     </div> */}
  //     <div className='sec'>
  //       {sec}
  //     </div>
  //     {/* <div className='button'>
  //       <button onClick={Timerstart} > Start</button>
  //     </div> */}
  //   </div>

  // );
}

export default App;
