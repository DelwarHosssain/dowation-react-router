import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Cards = ({ cards }) => {
    const{card_bg,picture,text_bg,category_bg,title,id,category} =cards||{}

    return (
        <div className=" ">
            <Link to={`/cards/${id}`}>
            <div className="card card-compact shadow-xl rounded-lg" style={{background:card_bg}}>
                <figure><img className="min-w-full" src={picture} alt="Shoes" /></figure>
                <div className="card-body pl-5  space-y-3 p-5">
                    <h2 className="card-title  w-24 pl-4 rounded-md text-sm font-medium" style={{color:text_bg ,background:category_bg}} >{title}</h2>
                    <p className="text-xl font-semibold" style={{color:text_bg}}>{category}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};


export default Cards;
