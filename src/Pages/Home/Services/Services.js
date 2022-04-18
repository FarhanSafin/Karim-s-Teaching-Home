import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Welcome to Karim's Teaching Home</h1>
            <p className='text-center mt-5 mb-5 text-secondary'>I am a teacher who give tuition to ssc and hsc students. You can see the service I provide and much more below.</p>
            <h2 className='text-info text-center mt-5'>My Services</h2>
            <div className='row'>
            {
                services.map(service => 
                <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;