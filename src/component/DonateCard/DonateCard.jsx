
const DonateCard = ({card}) => {
    const{donate_img,category,price,title,card_bg,text_bg,category_bg} =card||{}
    return (
        <div className=" ">
            <div className="flex md:flex card lg:card-side bg-base-100 shadow-xl" style={{background:card_bg}}>
                <figure><img src={donate_img} alt="Album"/></figure>
                <div className="card-body p-5 space-y-1 md:space-y-3">
                <h2 className="card-title  w-24 pl-4 rounded-md text-sm font-medium" style={{color:text_bg ,background:category_bg}} >{title}</h2>
                <p className=" text-base md:text-2xl font-semibold">{category}</p>
                <h2 className=" font-semibold text-base" style={{color:text_bg}}>{price}</h2>
                <div className="card-actions justify-end">
                <button  className="bg- py-1 px-3 md:px-5 rounded font-semibold  text-sm  md:text-lg text-white" style={{background:text_bg}}>View Details</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;