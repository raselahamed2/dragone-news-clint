import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewsSummaryCard/NewSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Dragon news home : {allNews.length}</h2>
            {
                allNews.map(news => <NewSummaryCard
                key={news._id}
                news={news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Home;