import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 text-center color'>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={img} alt="cardimage"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">৳ {price} per month</h6>
                    <Link to="/checkout"><button className='btn btn-primary'>Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;