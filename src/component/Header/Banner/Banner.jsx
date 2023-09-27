const Banner = () => {
    return (
        <div className="relative">
            <div
                
                className="h-[70vh]  w-full "
                style={{
                    backgroundImage: 'url("https://i.ibb.co/By1H20b/Whats-App-Image-2023-09-26-at-4-35-06-AM.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">

                <div className="mr-4">
                <h1 className="text-black text-xl ml-5  md:text-5xl font-bold">
                    I Grow By Helping People In Need
                </h1>
                <br />
                    <div className="join ml-16 md:ml-52">
                    <input className="input input-bordered join-item p-0 md:p-3" placeholder="Email"/>
                    <button className="btn join-item rounded-r bg-red-500 p-0 md:p-3">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 " style={{ background: "#fefeff", opacity: 0.5, zIndex: 5 }}>

            </div>
        </div>
    );
};

export default Banner;
