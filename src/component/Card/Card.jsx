
const Card = ({card}) => {
    const{card_bg,picture,description,category_bg,text_bg,id,category,price} =card||{}
    return (
        <div className="mt-20 ">
            <div className="">
                <img className=" w-full h-[600px]" src={picture} alt="" />
                <div className="bg-[#251e1b] w-full h-[130px] opacity-70 relative bottom-32">
            </div>
            </div>
            
            <div className="relative  bottom-56 left-10">
            <button className="bg- p-3 rounded font-semibold text-xl text-white" style={{background:text_bg}}>Donate {price}</button>
            </div>
            <div className=" relative bottom-32 space-y-5">
                <h1 className=" text-4xl font-bold">{category}</h1>
                <p className=" font-normal text-base  text-justify">{description}</p>
            </div>
            
        </div>
    );
};

export default Card;