import React from 'react';
import Banner from '../Banner/Banner';
import Scroll from '../Banner/Scroll';
import ChooseSection from '../ChooseSection/ChooseSection';
import Features from '../Features/Features';
import NumberOfRating from '../NumberOfRating/NumberOfRating';
import Resource from '../Resource/Resource';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Video from '../Video/Video';
import WorkWithUs from '../WorkWithUs/WorkWithUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Scroll></Scroll>
            <Team></Team>
            <NumberOfRating></NumberOfRating>
            <Video></Video>
            <Services></Services>
            <WorkWithUs></WorkWithUs>
            <ChooseSection></ChooseSection>
            <Features></Features>
            <Resource></Resource>
        </div>
    );
};

export default Home;