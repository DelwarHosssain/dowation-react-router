import { useEffect } from "react";
import { useState } from "react";

import DonateCard from "../../component/DonateCard/DonateCard";


const Donation = () => {
const [donaton,setDonaton]=useState([])
const[noData, setNoData]=useState(false)

const[isShowMore, setIsShowMore]=useState(false)


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
            {noData?
            (<p className="h-[80vh] flex justify-center items-center">{noData}</p> ):<div>
                <div className="grid md:grid lg:grid xl:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-5 mt-10">
                    {
                        isShowMore ?donaton.map(card=><DonateCard key={card.id} card={card}></DonateCard>)
                        :donaton.slice(0,4).map(card=><DonateCard key={card.id} card={card}></DonateCard>)
                    }
                </div>
                {
                    donaton.length> 4 && <button onClick={()=>setIsShowMore(!isShowMore)} className=" mx-auto block bg-[#009444] mt-7 py-2 px-7 rounded  text-base font-semibold text-white">{isShowMore ? "See Less" : "See More"}</button>
                }
            </div>} 
        </div>
    );
};

export default Donation;