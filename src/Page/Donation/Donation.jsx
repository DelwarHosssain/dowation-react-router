import { useEffect } from "react";
import { useState } from "react";

import DonateCard from "../../component/DonateCard/DonateCard";


const Donation = () => {
const [donaton,setDonaton]=useState([]);
const[noData, setNoData]=useState(false);
const [isShow,setIsShow] = useState(false)
useEffect(()=>{
    const allDonate = JSON.parse(localStorage.getItem('donate'))
    if(allDonate){
        setDonaton(allDonate)
    }
    else{
       setNoData('No Data')
    }
},[])
    console.log(donaton)
    return (
        <div>
            <div>
            {noData?
            <p className="h-[80vh] flex justify-center items-center">{noData}</p> :<div>
            </div>
            }
            <div className="grid md:grid lg:grid xl:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-5 mt-10">
                    {
                        isShow ? donaton.map((card=><DonateCard key={card.id} card={card}></DonateCard>))
                        :donaton.slice(0,4).map((card=><DonateCard key={card.id} card={card}></DonateCard>))
                    }
                    
            </div>
                
            {donaton.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>
}
            </div> 
        </div>
    );
};

export default Donation;