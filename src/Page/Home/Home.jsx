import { useLoaderData } from "react-router-dom";
import CardDonet from "../../component/CardDonet/CardDonet";
import Banner from "../../component/Header/Banner/Banner";

const Home = () => {

    const card =useLoaderData()
    
    console.log(card);
    return (
        <div className=" ">
            <Banner></Banner>
            
            <CardDonet CardDonet={card}></CardDonet>
        </div>
    );
};

export default Home;