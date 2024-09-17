import React, { useState } from 'react';
import {lazy, Suspense} from 'react';
// import CatList from './CatList';

export default function RestrauntMenu({data, accordion , setAcco}) {
    // const [accordion, setAccordion] = useState(false);
    const CatList = lazy(() => import('./CatList'));
    const handleClick = () => {
        
        setAcco();
    };
    return (
        <div className='bg-white shadow-md rounded-lg mb-4 m-auto p-4 w-9/12'>
            <div onClick={handleClick} className='flex justify-between items-center border-b border-gray-300 pb-2'  >
                <span className='text-lg font-semibold text-gray-800' >{data.title}({data.itemCards.length})</span>
                <button 
                   
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    {accordion ? '⬆️' : '⬇️'}
                </button>
            </div>
            {accordion && (
                <div className='mt-4'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {data.itemCards.map((data, index) => (
                            <CatList key={index} data={data} />
                        ))}
                    </Suspense>
                </div>
            )}
        </div>
    );
}
