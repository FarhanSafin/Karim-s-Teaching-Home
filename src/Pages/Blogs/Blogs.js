import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center text-light bg-dark m-5'>Difference between authorization and authentication?</h2>
            <p className='m-5'>The process of confirming who someone is, is known as authentication. Authentication factors the numerous aspects that the system uses to validate a user's identity before providing him access to a website or data.
            Authorization, on the other hand, is the process of determining which specific files, data and webpage a user has access to. Authorization determines your capacity to use the system and the extent to which you may do so.</p>

            <h2 className='text-center text-light bg-dark m-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='m-5'>For authentication, I'm using Firebase. I also use Firebase to host my websites. Using the firebase authentication system, I may choose an authentication system from a list of possibilities that includes Facebook, Google, Microsoft, Apple, Github, Yahoo, Twitter, Phone number, and so on.</p>

            <h2 className='text-center text-light bg-dark m-5'>What other services does firebase provide other than authentication?</h2>
            <p className='m-5'>Other services provided by Firebase include a realtime database, remote configuration, assistance in adding machine learning features to apps, support for cloud functions, a cloud messaging system, a hosting service, and a cloud storage system.</p>
        </div>
    );
};

export default Blogs;