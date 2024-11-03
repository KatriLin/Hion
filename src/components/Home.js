import frontpagekuva from '../img/frontpage.jpg';

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="main">
          <div className="textcontainer">
            <p className="myname">Katri Lindvall</p>
            <h1 className="maintext">
              Asiakaslähtöinen <br />
              ohjelmistokehittäjä
            </h1>
          </div>
          <div className="home-image-container">
            <img
              alt="domenicoloiaunsplashphoto"
              src={frontpagekuva}
              className="styled-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
