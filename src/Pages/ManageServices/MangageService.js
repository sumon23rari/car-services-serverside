import React from 'react';
import useServices from '../../Hooks/useServices';

const MangageService = () => {
    const[services,setServices]=useServices();
    const handleDelete=id=>{
        const proced=window.confirm("are you sure deleted this item");
        if (proced) {
          const url=`http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
          .then(data=> {
                console.log(data)
                const remainig=services.filter(service=>service._id !==id)
                setServices(remainig)
            })
        }
    }
    return (
        <div>
            <h2>this is manage service</h2>
            {
                services.map(service=><li key={service._id}>
                    {service.name}
                    <button onClick={()=>handleDelete(service._id)}>delete</button>
                    </li>)
            }
        </div>
    );
};

export default MangageService;