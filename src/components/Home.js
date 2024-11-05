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

      <div className="application-container">
        <div className="left-column">
          <h2>Kuka olen?</h2>
          <p className="application-text">
            Nimeni on Katri Lindvall, ja olen juniori-ohjelmistokehittäjä. Etsin
            tällä hetkellä täysipäiväistä ohjelmistokehittäjän paikkaa.
            Osaamiseni painottuu erityisesti frontend-kehitykseen, mutta
            haluaisin tulevaisuudessa laajentaa osaamistani myös Full Stack
            -rooliin.
          </p>

          <h2>Miksi teille?</h2>
          <p className="application-text">
            Hain teille töihin, koska työssäni minua on aina innostanut eniten
            projektit, joissa olen päässyt rakentamaan nettisivuja,
            verkkokauppoja tai mobiilisovelluksia, ja teidän yrityksenne tekee
            juuri näitä asioita. Lisäksi arvostan yrityksenne avointa ja
            välittävää kulttuuria, jossa oppimista tuetaan. Käytössänne olevat
            teknologiat ovat myös sellaisia, joiden osaamista haluaisin
            syventää.
          </p>
        </div>

        <div className="right-column">
          <h2>Mitä olen tehnyt aikaisemmin?</h2>
          <p className="application-text">
            Aikaisemmassa työssäni Stealth Black Oy:ssä työskentelin
            ohjelmistokehittäjänä muutaman vuoden, rakentaen datankeräysohjelmia
            Pythonilla ja Seleniumilla. Frontend-kehityksessä käytin Reactia
            yrityksen tuotteiden ja verkkosivujen kehittämisessä, ja
            tietokantana käytössäni oli PostgreSQL. Lisäksi tuotin
            opetusaineistoja koneoppimismalleille. Ennen tätä työskentelin RND
            Worksillä, jossa kehitimme tiimissä asiakkaalle mobiilisovelluksen
            React Nativea käyttäen.
          </p>

          <h2>Mitä voin tarjota?</h2>
          <p className="application-text">
            Minulla on monipuolista työkokemusta ohjelmistokehittäjänä sekä
            muissa rooleissa eri toimialoilta, mikä on vahvistanut
            ongelmanratkaisutaitojani ja sopeutumiskykyäni. Erityisesti
            frontend-kehityksessä olen tarkka yksityiskohdista ja nautin
            visuaalisen ilmeen rakentamisesta. Koen, että voin tuoda tiimille
            lisäarvoa positiivisella asenteellani ja asiakaspalvelutaidoillani.
            Kansainvälinen kokemukseni opiskelun ja työn kautta on kehittänyt
            vuorovaikutustaitojani eri kulttuurien kanssa, ja puhun sujuvasti
            suomea, englantia ja italiaa. Luonteeltani olen oma-aloitteinen,
            joustava ja sosiaalinen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
