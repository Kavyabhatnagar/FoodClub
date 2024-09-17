// import React, { useState, useEffect } from 'react';
// import Cards from './Cards';
// import Shimmer from './Shimmer';
// import { Link } from 'react-router-dom';

// export default function Main_container() {
//   const [infoArray, setInfoArray] = useState([]);
//   const [filteredArray, setFilteredArray] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
//       .then(response => response.json())
//       .then(json => {
//         const infoArray = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//         setInfoArray(infoArray);
//         setFilteredArray(infoArray);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log("error", err);
//         setLoading(false);
//       });
//   }, []);

//   const topRatedRestaurant = () => {
//     const topRatedList = infoArray.filter(data => data.info.avgRating > 4.5);
//     setFilteredArray(topRatedList);
//   };

//   const handleSearchChange = (e) => {
//     const searchText = e.target.value;
//     setSearchText(searchText);
//     const filteredOne = infoArray.filter((res) =>
//       res.info.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredArray(filteredOne);
//   };

//   if (loading) {
//     return (
//       <div className='flex flex-col items-center justify-center space-y-4'>
//         <div className='flex space-x-4 mt-4'>
//           <input
//             value={searchText}
//             onChange={handleSearchChange}
//             className='p-2 border-2 border-black rounded-lg'
//             placeholder='Search...'
//           />
//           <button className='bg-pink-400 text-white p-2 rounded'>Search</button>
//           <button className='bg-pink-400 text-white p-2 rounded'>Top Rated Restaurant</button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//           {Array(8).fill('').map((_, index) => (
//             <Shimmer key={index} />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='flex flex-col items-center justify-center space-y-4'>
//       <div className='flex space-x-4 mt-4'>
//         <input
//           value={searchText}
//           onChange={handleSearchChange}
//           className='p-2 border-2 border-black rounded-lg'
//           placeholder='Search...'
//         />
//         <button className='bg-pink-400 text-white p-2 rounded' onClick={topRatedRestaurant}>Top Rated Restaurant</button>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//         {filteredArray.length > 0 ? (
//           filteredArray.map((data) => (
//             <Link
//               key={data.info.id}
//               to={"/restraunts/" + data.info.id}
//               className="w-full"
//               style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
//             >
//               <Cards ResData={data} />
//             </Link>
//           ))
//         ) : (
//           <p>No restaurants found.</p>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

export default function Main_container() {
  const [infoArray, setInfoArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      .then(response => response.json())
      .then(json => {
        const infoArray = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setInfoArray(infoArray);
        setFilteredArray(infoArray);
        setLoading(false);
      })
      .catch(err => {
        console.log("error", err);
        setLoading(false);
      });
  }, []);

  const topRatedRestaurant = () => {
    const topRatedList = infoArray.filter(data => data.info.avgRating > 4.5);
    setFilteredArray(topRatedList);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    const filteredOne = infoArray.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArray(filteredOne);
  };

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div className='flex space-x-4 mt-4'>
          <input
            value={searchText}
            onChange={handleSearchChange}
            className='p-2 border-2 border-black rounded-lg'
            placeholder='Search...'
          />
          {/*<button className='bg-pink-400 text-white p-2 rounded'>Search</button>*/}
          <button className='bg-pink-400 text-white p-2 rounded'>Top Rated Restaurant</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
          {Array(8).fill('').map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center space-y-4 w-full'>
      <div className='flex space-x-4 mt-4 mb-6'>
        <input
          value={searchText}
          onChange={handleSearchChange}
          className='p-2 border-2 border-black rounded-lg'
          placeholder='Search...'
        />
        <button className='bg-pink-400 text-white p-2 rounded' onClick={topRatedRestaurant}>Top Rated Restaurant</button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full p-4">
        {filteredArray.length > 0 ? (
          filteredArray.map((data) => (
            <Link
              key={data.info.id}
              to={"/restraunts/" + data.info.id}
              className="w-full"
              style={{'text-decoration': 'none'}}
            >
              <Cards ResData={data} />
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </ul>
    </div>
  );
}
