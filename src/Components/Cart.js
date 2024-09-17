import React from 'react';
import { useSelector } from 'react-redux';
import CatList from './CatList';
import { clearItems } from '../Utiles/cartSlice';
import { useDispatch } from 'react-redux';

export default function Cart() {
    const items = useSelector((store) => store.cart.items);
    console.log("items in cart", items);
    const Dispatch = useDispatch();

    
    return (
        <div>
            <div className='mt-5 font-bold text-lg center '>
                Cart-({items.length})   
                <button className=' bg-pink-500 text-white  p-2 rounded ml-3' onClick={()=>{Dispatch(clearItems())}}>Clear Cart 🗑️</button>       
            </div>
           {items.length === 0 && <h1 className='text-2xl font-bold mt-24 mb-64'>You cart is empty ! Please add some items.</h1>}
            <div className='bg-white shadow-md rounded-lg mb-4 m-auto p-4 w-9/12'>
            {
                items.map((c, index) => (
                    <CatList key={index} data={c} />
                ))
            }
            </div>
           
        </div>
    );
}
