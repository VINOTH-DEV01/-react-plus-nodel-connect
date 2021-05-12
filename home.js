const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

// Open the connection to the server
router.get('/user',  (req, res) => {
    res.status(200).json({
        message:[{
            name: "Anil",
            location: "Bangalore",
        },
        {
            name: "Anil2",
            location: "Bangalore",
        },
        {
            name: "Anil3",
            location: "Bangalore",
        },
        {
            name: "Anil4",
            location: "Bangalore",
        }]
    });
})
module.exports = router;
     




// import logo from './logo.svg';
// import './App.css';

// import React, { useState,  useEffect }  from 'react';

// function App() {
//   const [ data, setData] = useState([]);
//   useEffect(() => {
//     fetch('/user').then((res) => {
//       console.log(res);
//         if(res.ok) {
//          return res.json();
//         }
//     }).then(jsonres => {
//       console.log("jsonres", jsonres);
//       setData(jsonres.message)
//     });
//   });
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {data.map((item, index) => {
//           return (
//             <p> {item.name +" "+ item.location}</p>
//           )
//         })}   
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >  
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

