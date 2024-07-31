import React from "react";
import Body from "./Body";
import Footer from "./Footer";



function Header(){
    return(
      <div className="mainTop">
        <Body />
        <Footer/>
        
      </div>
      
    );
  }
export default Header;


// function Header(){
//     return(
        
//          <div className="topNav">
//             <nav>
//                 <div className="logoImage">
//                 <img src={logo} alt="Logo" />
//                 </div>
//                 <div className="navList">
                
//                         <li><Link to="/App">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/contactus">Contact Us</Link></li>
//                         <li><Link to="/location">Location</Link></li>
                        
//                     </div>
//                 <div>
//                     <button className="loginButton"><Link to="/searchDetails">Login/Signup</Link></button>
//                 </div>
//             </nav>
            
//          </div>
//     );
// }
// export default Header;

// import React from "react";

// const Person = 
// [ 
//     {
//     fname : "vishal",
//     Lname : " kumar",
//     city: "ranchi"
//     },
//     {
//         fname : "rahul",
//         Lname : " kumar",
//         city: "patna"
//         },
//         {
//             fname : "amit",
//             Lname : " kumar",
//             city: "gola"
//             },
//             {
//                 fname : "abhi",
//                 Lname : " kumar",
//                 city: "ranchi"
//                 },

// ]




// function Header(){
//     return(
//         <div>
//             <h1>this is my team data</h1>
//             {Person.map(details =>(
//                 <div>
//                     <p>name:{details.fname}</p>
//                     <p>place:{details.city}</p>
//                 </div>
//             )
//         )}

//             </div>
//     );

// }


// import React from "react";

// const person =[
//     {
//         fname : "vishal",
//         age : 27,
//         city:"Delhi"
//     },
//     {
//         fname:"rahul",
//         age:28,
//         city:"rajesthan"
//     },
//     {
//         fname:"villa",
//         age:28,
//         city:"ranchi"
//     }

   
// ]

// function Header(){
//     return(
//         <div>
//             {person.map(details =>(
        
//             <div>
//                  <p>Nmae:{details.fname}</p>
//                  <p>Age:{details.age}</p>
//                  <p>City:{details.city}</p>
            
//             </div>
           
//         ))}
//         </div>
//     );
    
// }

// import { useState } from "react";
//  function Header(){
    
//         const[count, setcount] = useState(0);
//         return(
//             <div>
//                 <p>You clicked {count} times</p>
//                 <button onClick={()=> setcount(count + 1)}>
//                     clickme

//                 </button>
//             </div>
//     );

//  }


// import { useEffect , useState} from "react";

// function Header(){
//     const[count, setcount]= useState(0);
//     const[name, setname]= useState("villa");
//     useEffect(()=>{
//         console.log("my name is vishal");
//     }, [count])
//     return(
//         <div>
//             <h1>{count}</h1>
//             <h1>{name}</h1>
//             <button onClick={()=>  setcount(count +1)}>ADD</button>
//             <button onClick={()=>  setcount(count -1)}>REMOVE</button>
//             <button onClick={()=> setname("rahul")}>click me</button>
            
//         </div>
//     )
// }

// export default Header;