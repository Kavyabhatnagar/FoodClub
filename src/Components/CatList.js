import React from 'react';
import { cdn_url } from '../Utiles/comman';
import { addItems ,removeItems} from '../Utiles/cartSlice';
import { useDispatch } from 'react-redux';

export default function CatList(props) {
    const cardInfo = props?.data?.card?.info || {}; // Handle undefined cases safely
    const { name, description, price, offerTags, defaultPrice, ratings, imageId } = cardInfo;
    const { vegClassifier } = cardInfo?.itemAttribute || {}; // Handle itemAttribute safely

    const dispatch = useDispatch();

    // Handle click to add item to the cart
    const HandleClick = () => {
        dispatch(addItems(props.data)); // Pass the complete 'data' object to addItems
    };
    
    return (
        <div className='p-4 shadow-lg rounded-lg border border-gray-200 bg-white mt-4 relative'>
            <div className='flex justify-between items-start'>
                {/* Item details */}
                <div className='flex flex-col w-9/12'>
                    <div className='flex items-center'>
                        {/* Veg/Non-Veg icon */}
                        <span className='mr-1'>{vegClassifier === 'NONVEG' ? '🔺' : '🟢'}</span>

                        {/* Item name */}
                        <div className='text-base font-bold text-left'>
                            {name}
                        </div>
                    </div>

                    {/* Price, offers, and rating */}
                    <div className='mt-2 text-left'>
                        <div className='flex items-center'>
                            {/* Price */}
                            <span className='font-semibold text-lg mr-4 text-left'>₹ {price ? price / 100 : defaultPrice / 100}</span>
                        </div>

                        {/* Offers */}
                        <div className='text-sm text-gray-500 text-left mt-2'>
                            {offerTags && offerTags.length > 0 && offerTags.map((tag, index) => (
                                <span key={index} className='block font-sans font-bold text-gray-600'>
                                    {tag.title} - {tag.subTitle}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className='block mt-3 w-full text-gray-500 text-base text-left'>
                        {description}
                    </div>
                </div>

                {/* Item image with Add button */}
                <div className='w-4/12 ml-4 relative'>
                    <img 
                        className='w-full h-26 object-cover rounded-lg shadow-sm' 
                        src={cdn_url + imageId} // Use destructured imageId
                        alt={name} 
                    />
    
                    {/* Add button with + and - */}
                    <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center '>
                        <button 
                            className='bg-black text-white font-semibold py-1 px-3 rounded-l-md shadow-md' 
                            onClick={()=>{dispatch(removeItems(props.data));}}>
                            -
                        </button>
                        <span className='bg-black text-white font-semibold py-1   shadow-md'>
                            ADD
                        </span>
                        <button 
                            className='bg-black text-white font-semibold py-1 px-3 rounded-r-md shadow-md' 
                            onClick={HandleClick}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
