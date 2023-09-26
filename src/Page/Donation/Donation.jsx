import { useEffect } from "react";
import { useState } from "react";

import DonateCard from "../../component/DonateCard/DonateCard";


const Donation = () => {
const [donaton,setDonaton]=useState([])
const[noData, setNoData]=useState(false)
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
            {noData?<p className="h-[80vh] flex justify-center items-center">{noData}</p> :<div>
                <div className="grid grid-cols-2 gap-5 mt-10">
                    {
                        donaton.map(card=><DonateCard key={card.id} card={card}></DonateCard>)
                    }
                </div>

            </div>} 
        </div>
    );
};

export default Donation;