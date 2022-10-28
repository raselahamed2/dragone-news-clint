import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewsSummaryCard/NewSummaryCard';

const Catagory = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>this is catagory: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewSummaryCard
                key={news._id}
                news={news}
                />)
            }
        </div>
    );
};

export default Catagory;