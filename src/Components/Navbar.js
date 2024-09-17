import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useOnlineStatus from '../Utiles/useOnlineStatus';

export default function Navbar() {
  const onlineStatus = useOnlineStatus();
  const items= useSelector((store)=> store.cart.items);
  console.log("cart",items)
  return (
    <nav className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-500 shadow-lg py-4 mb-16">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div >
        <Link to="/" className="flex items-center" style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}>
         <img src="/fast-food.png" alt="Food logo" className="w-16 h-16 mr-2" />
          <span className="text-2xl font-bold text-white">FoodClub</span>
        </Link>
          
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg font-medium">
          <Link 
            to="/FoodClub" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
          >
            Home
          </Link>

          <Link 
            to="/About" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
          >
            About Us
          </Link>

          <Link 
            to="/Contact" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
          >
            Contact
          </Link>
          <Link 
            to="/Cart" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
          >
            Cart({items.length})
          </Link>
          <Link 
          to="#" 
          className="text-white hover:text-yellow-300 transition-colors duration-300"
          style={{'text-decoration': 'none', 'hover:text-decoration':'none'}}
        >
          {onlineStatus ? 'Online ✅' : 'Offline 🔴'}
        </Link>
        </div>
      </div>
    </nav>
  );
}
