import zefram from '../img/zefram-logo.png';
import rnd from '../img/rndworks-logo.png';
import zucchetti from '../img/zucchetti.jpg';

const Workexperience = () => {
  return (
    <>
      <div className="background-grey-wrapper">
        <h1 className="work-heading">Työkokemus</h1>
      </div>
      <h2 className="work-heading-2">Työkokemus</h2>
      <div className="workboxes-container">
        <div>
          <div className="image-container-zefram">
            <img alt="zeframlogo" src={zefram} className="styled-image-zef" />
          </div>
          <div className="description">
            <h3>Junior Software Developer</h3>
            <p className="description-text">
              Työskentelin Zeframilla muutaman vuoden ohjelmistokehittäjänä,
              jossa rakensin erityisesti ohjelmia datan keruuta varten käyttäen
              Pythonia ja Seleniumia. Reactia hyödynsin muissa projekteissa,
              kuten yrityksemme tuotteen ja verkkosivujen kehittämisessä.
              Tietokantoina käytin PostgreSQL:ää, ja lisäksi tuotin
              opetusaineistoja koneoppimismalleille.
            </p>
          </div>
        </div>

        <div>
          <div className="image-container-rnd">
            <img alt="rndworkslogo" src={rnd} className="styled-image-rnd" />
          </div>
          <div className="description">
            <h3>Junior Software Developer</h3>
            <p className="description-text">
              RND Worksillä työskennellessäni kehitimme tiimin kanssa
              mobiilisovellusta asiakkaallemme iOS- ja Android-laitteille
              käyttäen React Nativea.
            </p>
          </div>
        </div>

        <div>
          <div className="image-container-zucchetti">
            <img
              alt="zucchettilogo"
              src={zucchetti}
              className="styled-image-zucchetti"
            />
          </div>
          <div className="description">
            <h3>Junior Software Developer Trainee</h3>
            <p className="description-text">
              Ohjelmoin tarjoilijoiden tilausjärjestelmän hyödyntäen
              JavaScriptiä, PostgreSQL:ää ja Javaa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workexperience;
