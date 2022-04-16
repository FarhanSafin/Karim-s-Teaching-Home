import React from 'react';
import Navigate from '../Navigate/Navigate';

const Navbar = () => {

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Blogs', link: '/blogs'},
        {id: 3, name: 'About Me', link: '/about'},
        {id: 4, name: 'Login', link: '/login'},
    ]

    return (
        <nav>
            <ul className='d-flex'>
                {
                    routes.map(route => <Navigate 
                    key={route.id}
                    route={route}
                    ></Navigate>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;