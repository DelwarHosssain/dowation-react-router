import { useLoaderData } from "react-router-dom";
import CardDonet from "../../component/CardDonet/CardDonet";
import Banner from "../../component/Header/Banner/Banner";

const Home = () => {

    const card =useLoaderData()
    
    console.log(card);
    return (
        <div className=" ">
            <div className="mt-10">
            <Banner></Banner>
            </div>
            
            <CardDonet CardDonet={card}></CardDonet>
        </div>
    );
};

export default Home;