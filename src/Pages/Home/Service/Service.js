import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 text-center'>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={img} alt="cardimage"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">$ {price} per month</h6>
                    <a href="/" className="btn btn-danger">Check Out</a>
                </div>
            </div>
        </div>
    );
};

export default Service;