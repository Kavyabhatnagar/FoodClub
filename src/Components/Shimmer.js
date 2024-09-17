import React from 'react'
import '../App.css';
export default function Shimmer() {
  return (
    <div className="card" style={{backgroundColor:'#D3D3D3',height:'250px',width:'200px'}}>
    <div className='card-image'style={{backgroundColor:'#C0C0C0'}}></div>
    <div className="card-details shimmer">
    </div>
  </div>
  )
}
