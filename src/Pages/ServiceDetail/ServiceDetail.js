import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState({});
    useEffect(()=>{
   const url=`http://localhost:5000/service/${serviceId}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2><small>You are service to detail: {serviceId}</small></h2>
            <div className='text-center'>
                <h3>{service?.name}</h3>
                <img src={service?.img} alt="service.img" />
                <br />
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;