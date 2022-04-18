import React from 'react';
import StudentRecord from '../../StudentRecord/StudentRecord';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <StudentRecord></StudentRecord>
        </>
    );
};

export default Home;