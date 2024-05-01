import React from 'react';
import { useData } from '../context/dataContext';

const Explore = () => {
    // Access data from context
    const data = useData();

    // Check if data exists before rendering
    if (!data) {
        return <div>No data available</div>;
    }

    // Example rendering for exploration-related information
    return  (
<div className=' grid grid-cols-4 gap-4 border-black-300 w-full mr-20 ml-20 bg-black-100'>
    <div className='bg-black-500 h-100px'>
      
     {data.exploreMore.news.urlToImage}
    

    

    </div>
    <div className=''> {data.exploreMore.news.title}</div>
    <div className=''> {data.exploreMore.news.publishedAt}</div>
    
</div>
    );
       
};

export default Explore;
