import foodbody from "./foodbody.png";
function Body(){
    return(
        <div>
                <h1>This Is My Food Network Zone</h1>
                <img src={foodbody} alt="foodbody"  className="foodbody"/>
            </div>
    );
}
export default Body;


// import React,{ useState } from "react";
// import Restaurant from "./Restaurant";
// import restaurantList from "./Mockdata";


// const Body = ()=>{
//     const [restaurantLists,setrestaurantList] = useState(restaurantList);
//     const [FilterrestaurantLists,setfilterrestaurantList] = useState(restaurantList);
//     const [SearchText,setSearchText] = useState("") ;
//     return (         
//     <div>
//                 <div>
//                  <input type="text" className="searchReasturent" value={SearchText} onChange={(e)=>{
//                     setSearchText(e.target.value)
//                  }} placeholder="Search Your Reasturent" />
//                  <button onClick={filterRestaurant(restaurantList,SearchText,setfilterrestaurantList)}>search</button>
//                  <button onClick={Restaurant}>Refresh all</button>
//                  </div>
//                  <Restaurant restaurantList ={FilterrestaurantLists}/>
//     </div>)




// }




// // function Body(){
// //     return(
// //         <div>
// //             <div>
// //             <input type="text" className="searchReasturent" placeholder="Search Your Reasturent" />
// //             <button onClick={filterRestaurant}>search</button>
// //             <button onClick={Restaurant}>Refresh all</button>
// //             </div>
// //             <Restaurant/>
// //         </div>

// //     );
// // }

// // function filterRestaurant(data, searchText){
// //     return '';
// // }

// const filterRestaurant = (data, searchText,setfilterrestaurantList)=>{
//     setfilterrestaurantList(data.filter((obj)=>{
//         return obj.info.name.toLowerCase().includes(searchText.toLowerCase())
//     }));
// }

// // Restaurant();

// // searchReasturent.addEventListener("input", function() {
// //     const filteredData = filterRestaurant(restaurantList, searchReasturent.value);
// // //showData(filteredData, restaurantList);
// // })


// // export default Body;
// export default Body;
