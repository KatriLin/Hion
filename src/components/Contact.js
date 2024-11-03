import kuva from '../img/kuva.jpg';
const Contact = () => {
  return (
    <div className="contactwrapper">
      <div>
        <h1 className="contacttext">Yhteystiedot</h1>
        <p className="contactme">Näin tavoitat minut.</p>
      </div>
      <div className="image-container">
        <img alt="kuva" src={kuva} className="myphoto" />
        <h3>Katri Lindvall</h3>
        <p>Junior Web Developer</p>
        <p>+358 44 29 77058</p>
        <p>
          <a href="mailto:lindvallkatri@hotmail.com">
            lindvallkatri@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
