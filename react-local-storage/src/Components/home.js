const Home = ({ userdata }) => {

    return (
        <div className="container">
            <div>
                
                <h2><img src="https://i.hizliresim.com/2GL30J.png" alt="usericon" width="5%" />Welcome,
                    <span>
                        {userdata.name} {userdata.surname}
                    </span>
                </h2>


            </div>
        </div>
    );

}

export default Home;