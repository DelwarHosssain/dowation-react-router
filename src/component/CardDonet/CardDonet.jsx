import Cards from "../Cards/Cards";



const CardDonet = ({CardDonet}) => {
    console.log(CardDonet)
    return (
        <div className="md:grid md:grid-cols-4 gap-5 mt-20 " >
            {
                CardDonet?.map(cards=> <Cards key={cards.id} cards={cards}></Cards>) 
            }
        </div>
    );
};

export default CardDonet;