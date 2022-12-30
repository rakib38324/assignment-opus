import React from 'react';
import Banner from '../Banner/Banner';
import Scroll from '../Banner/Scroll';
import NumberOfRating from '../NumberOfRating/NumberOfRating';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Scroll></Scroll>
            <Team></Team>
            <NumberOfRating></NumberOfRating>
            <Video></Video>
            <Services></Services>
        </div>
    );
};

export default Home;