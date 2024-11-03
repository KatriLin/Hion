import kuva from '../img/katri.jpeg';

const About = () => {
  return (
    <>
      <div className="background-grey">
        <div className="contwrapper">
          <div className="text-container">
            <p className="about-text">Minusta</p>
            <p className="about-text-2">
              Olen junior-ohjelmistokehittäjä, jonka osaaminen painottuu
              erityisesti Frontendiin, mutta haluaisin kasvattaa osaamistani
              Full Stack rooliin.
            </p>
          </div>
          <img alt="kuva" src={kuva} className="about-photo" />
        </div>
      </div>
      <h2 className="about-header-2">Kulmakiveni</h2>
      <div className="boxes-container">
        <div className="box">
          <h3>Aina oppimassa uutta</h3>
          <p className="box-text">
            Olet aina kiinnostunut oppimaan uutta ja kehittämään itseäsi.
            Teknologia-ala tarjoaa tähän erinomaiset puitteet. Tällä hetkellä
            opiskelen Wordpressiä ja syvennän React.js tietouttani, mikä
            mahdollistaa monipuolisten verkkosovellusten kehittämisen.
          </p>
        </div>
        <div className="box">
          <h3>Positiivinen ja visuaalinen</h3>
          <p className="box-text">
            Uskon, että kaikille asioille löytyy aina ratkaisu. Haasteiden
            edessä pysyn positiivisena ja etsin keinoja edetä. Nautin tuotteiden
            visuaalisen puolen toteuttamisesta,ja koen tämän tärkeäksi
            loppukäyttäjän näkökulmasta.
          </p>
        </div>
        <div className="box">
          <h3>Sosiaalinen ja yhteystyökykyinen</h3>
          <p className="box-text">
            Kuuntelen asiakkaiden tarpeita, ja otan heidän palautteen huomioon
            ja pyrit kehittämään ratkaisuja, jotka todella palvelevat asiakkaan
            tarpeitaan.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
