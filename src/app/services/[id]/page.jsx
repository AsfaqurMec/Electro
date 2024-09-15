/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


import Detail from '@/Components/Detail';
import { getServicesDetails } from '../../../../services/getItems';

const page = async ({params}) => {
    //console.log(params.id);
    
   
     
          const  services =await getServicesDetails(params.id);
            
    
    return (

        <Detail latest={services} 
        paramsId={params.id} ></Detail>

    );
};

export default page;