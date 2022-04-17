import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Navigate from '../Navigate/Navigate';


const Navbar = () => {
    const [user] = useAuthState(auth);

     const handleSignOut = () => {
         signOut(auth);
     }

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Blogs', link: '/blogs'},
        {id: 3, name: 'About Me', link: '/about'}
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
                {
                    user ? <Button className='btn btn-danger m-3' onClick={handleSignOut}>Sign out</Button> : <></>
                }
            </ul>
        </nav>
    );
};

export default Navbar;