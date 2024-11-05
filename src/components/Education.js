import cagliari from '../img/cagliari.jpeg';
import bc from '../img/bc.png';
import canterbury from '../img/canterbury.png';

const Education = () => {
  return (
    <>
      <div className="background-grey-wrapper">
        <h1 className="edu-heading">Koulutus</h1>
      </div>

      <div className="eduboxes-container">
        <h2 className="edu-heading-2">Koulutus</h2>
        <div className="study-box-bc">
          <div className="image-container-bc">
            <img alt="bclogo" src={bc} className="styled-image-bc" />
          </div>
          <div className="description">
            <h3>Full Stack Web Developer</h3>
            <p className="description-text">
              Olen suorittanut aikuisille suunnatun intensiivisen
              koodauskoulutuksen ja suoritin tieto- ja viestintätekniikan
              perustutkinnon Datanomi. Koulutuksessa opiskelin keskeisiä
              web-teknologioita, kuten HTML, CSS ja JavaScript, sekä React.js,
              Node.js ja NoSQL-tietokantoja. Tämä koulutus on antanut minulle
              hyvän pohjan ohjelmistokehityksessä, ja olen innokas soveltamaan
              oppimiani taitoja käytännön projekteissa.
            </p>
          </div>
        </div>

        <div>
          <div className="image-container-cagliari">
            <img
              alt="cagliarilogo"
              src={cagliari}
              className="styled-image-cagliari"
            />
          </div>
          <div className="description">
            <h3>Valtiotieteiden kandidaatti</h3>
            <p className="description-text">
              Olen suorittanut valtiotieteiden ja kansainvälisten suhteiden
              koulutusohjelman, jossa pääaineeni oli yhteiskuntatieteet. Tämä
              koulutus on syventänyt ymmärrystäni poliittisista ja sosiaalisista
              kysymyksistä sekä kansainvälisistä suhteista. Koko
              koulutusohjelman kävin italiaksi.
            </p>
          </div>
        </div>

        <div>
          <div className="image-container-canterbury">
            <img
              alt="canterburylogo"
              src={canterbury}
              className="styled-image-canterbury"
            />
          </div>
          <div className="description">
            <h3>Valtiotieteiden opintoja</h3>
            <p className="description-text">
              Opiskelin valtiotieteiden ja oikeustieteiden ensimmäisen vuoden
              opinnot, jotka tarjosivat syvällisen pohjan poliittiselle
              ajattelulle, oikeusjärjestelmille ja kansainvälisille suhteille.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
