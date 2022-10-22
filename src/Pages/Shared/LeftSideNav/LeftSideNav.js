import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categoris, setCatagoris] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/news-categoris')
        .then(res => res.json())
        .then(data => setCatagoris(data))
    },[])

    return (
        <div>
            <h2>all catagoris: {categoris.length}</h2>
            {
                categoris.map(category => <p key={category.id}>
                    <Link to = {`catagory/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;