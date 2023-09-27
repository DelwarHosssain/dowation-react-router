
import swal from "sweetalert";

const Card = ({card}) => {
    const{id,picture,description,text_bg,category,price} =card||{}

    const handleAddDonate =()=>{
        const addallDonateArray =[];
        const allDonate = JSON.parse(localStorage.getItem('domate'))
        if (!allDonate) {
            addallDonateArray.push(card)
            localStorage.setItem('domate', JSON.stringify(addallDonateArray))
            swal("Good job!", "Youre Donation successfully!", "success");
        }
        else{
            const isExits = allDonate.find(card=>card.id==id)
            if (!isExits) {
                addallDonateArray.push(...allDonate,card)
                localStorage.setItem('domate', JSON.stringify(addallDonateArray))
                swal("Good job!", "Youre Donation successfully!", "success");
            }
            else{
                swal("ERROR!", "Allredy Donated", "error");
            }
            
        }

        
    }

    return (
        <div className="mt-20 ">
            <div className="">
                <img className=" w-full h-[600px]" src={picture} alt="" />
                <div className="bg-[#251e1b] w-full h-[130px] opacity-70 relative bottom-32">
            </div>
            </div>
            
            <div className="relative  bottom-56 left-10">
            <button onClick={handleAddDonate} className="bg- p-3 rounded font-semibold text-xl text-white" style={{background:text_bg}}>Donate {price}</button>
            </div>
            <div className=" relative bottom-32 space-y-5">
                <h1 className=" text-4xl font-bold">{category}</h1>
                <p className=" font-normal text-base  text-justify">{description}</p>
            </div>
            
        </div>
    );
};

export default Card;