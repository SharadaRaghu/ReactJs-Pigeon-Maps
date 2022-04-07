import React from 'react';
import { Map, ZoomControl } from "pigeon-maps";

export default function App() {
  
  return (
    <div className="App">
     <h1>Maps using Pigeon in ReactJs</h1>
    <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <ZoomControl />
    </Map>
    </div>
  )
}








// import React, { useState } from "react";
// import { Map, Marker } from "pigeon-maps";
// import { render } from "@testing-library/react";

// export default function App() {
// render(){
//   const MyMap = () =>  {
//     const [hue, setHue] = useState(0)
//     const color = `hsl(${hue % 360}deg 39% 70%)`
  

//    return (
//       <Map height={300} defaultCenter={[17.3850, 78.4867]} defaultZoom={11}>
//          <Marker width={50}
//           anchor={[17.3850, 78.4867]}
//           color={color} 
//           onClick={() => setHue(hue + 20)} 
          
//           />
//       </Map>
//    );
// }
// }
// }




// // import './App.css';
// // import { Marker } from 'pigeon-maps';
// // import { Map } from 'pigeon-maps';

// // function App() {
// //   return (
// //     <div className="App">
//       {/* <Map/> */}
//      {/* <Marker/> */}
// //     </div>
// //   );
// // }


