import Cards from "../Cards/Cards";



const CardDonet = ({CardDonet}) => {
    console.log(CardDonet)
    return (
        <div className=" grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 gap-5 mt-20 " >
            {
                CardDonet?.map(cards=> <Cards key={cards.id} cards={cards}></Cards>) 
            }
        </div>
    );
};

export default CardDonet;