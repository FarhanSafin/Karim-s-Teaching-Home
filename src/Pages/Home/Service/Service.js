import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={img} alt="cardimage"/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">$ {price}</p>
                    <a href="/" class="btn btn-danger">Check Out</a>
                </div>
            </div>
        </div>
    );
};

export default Service;