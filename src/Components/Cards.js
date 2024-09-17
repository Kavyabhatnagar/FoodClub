// import React from 'react';

// export default function Cards({ ResData }) {
//   return (
//     <div className="card border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full mt-4 ">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${ResData.info.cloudinaryImageId}`}
//         className="card-image w-full h-48 object-fill"
//         alt={ResData.info.name}
//       />
//       <div className="p-4 h-36">
//         <span className="card-title text-lg font-semibold">{ResData.info.name}</span>
//         <div className="card-details mt-2 text-sm text-gray-700">
//           <ul className="list-none pl-4 space-y-1">
//             <li><strong>{ResData.info.avgRating} ⭐️ | {ResData.info.sla.deliveryTime}-{ResData.info.sla.deliveryTime + 5}mins</strong></li>
//             <li className="truncate">{ResData.info.cuisines.slice(0, 2).join(', ')}..more</li>
//            {/*  <li >{ResData.info.locality}</li>*/}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function Cards({ ResData }) {
  return (
    <li className="relative block rounded-[20px] overflow-hidden shadow-lg group h-[350px]">
      {/* Image with curved corners */}
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${ResData.info.cloudinaryImageId}`}
        alt={ResData.info.name}
        className="w-full h-[270px] object-fill rounded-t-[20px] transition-transform duration-200 ease-in-out group-hover:scale-105"
      />

      {/* White content box (restaurant name, rating) */}
      <div className="absolute bottom-0 left-0 right-0 pl-4 pr-4 pb-3 pt-2 bg-white rounded-l-[40px] transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
        <h3 className="text-lg font-semibold text-left truncate">{ResData.info.name}</h3>
        <p className="text-sm text-left text-gray-600 mt-1">
          {ResData.info.avgRating} ⭐️ | {ResData.info.sla.deliveryTime}-{ResData.info.sla.deliveryTime + 5} mins
        </p>

        {/* Cuisine info, visible on hover */}
        <p className="text-sm text-left text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {ResData.info.cuisines.slice(0, 2).join(', ')}..more
        </p>
      </div>

      {/* Overlay on hover (optional, purely for effect) */}
      <div className="absolute inset-0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[20px]"></div>
    </li>
  );
}
