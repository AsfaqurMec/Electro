import React from 'react';
import { getServicesDetails } from '../../../../services/getItems';

const page = async ({params}) => {
    console.log(params.id);
    
    const details =await getServicesDetails(params.id);
    //console.log(details);
    
    const {_id, title, imge1, image2, price} = details.service;
    return (
        <div>
           
            
            <h1>{title}</h1>
        </div>
    );
};

export default page;