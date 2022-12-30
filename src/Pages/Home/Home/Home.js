import React from 'react';
import Banner from '../Banner/Banner';
import Scroll from '../Banner/Scroll';
import NumberOfRating from '../NumberOfRating/NumberOfRating';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Scroll></Scroll>
            <Team></Team>
            <NumberOfRating></NumberOfRating>
        </div>
    );
};

export default Home;