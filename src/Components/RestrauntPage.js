import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useState } from 'react';
import useRestrauntPage from '../Utiles/useRestrauntPage';
import RestrauntMenu from './RestrauntMenu';
import RestrauntPageShimmer from './RestrauntPageShimmer';

function RestrauntPage() {
    const { resId } = useParams();
    const restInfo = useRestrauntPage(resId);
    const [Acco , setAcco] =  useState(null);
    if (restInfo === null) return <RestrauntPageShimmer />;

    const { name, avgRatingString, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info || {};
    const Categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
      console.log("Acco",Acco)
    return (
        <div className='p-6 bg-gray-50 min-h-screen'>
            <div className='container mx-auto'>
                <h1 className='text-3xl font-extrabold text-gray-800'>{name}</h1>
                <h4 className='mt-4 text-lg font-semibold text-gray-700'>
                    {cuisines.join(", ")} - {costForTwoMessage} | Rating: {avgRatingString} ⭐️
                </h4>
                <div className='mt-6'>
                    {Categories && Categories.map((res,index) => (
                        <RestrauntMenu 
                        key={res.card.card.title} 
                        data={res.card.card} 
                        accordion={index === Acco ? true :false} 
                        setAcco={()=>setAcco(index)}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestrauntPage;
