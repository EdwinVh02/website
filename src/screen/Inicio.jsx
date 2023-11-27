import Logo from "../assets/hotel.png";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="overlay">
        <div className="left-content">
          <h1 className="text2">Hotel Santa Cecilia</h1>
          <div className="text-container">
            <p>
              En el corazón del pintoresco municipio de Huejutla de Reyes,
              Hidalgo, el Hotel Santa Cecilia se erige como un oasis de
              hospitalidad. Nos enorgullece ofrecer un servicio excepcional a
              nuestros distinguidos huéspedes, consolidándonos como uno de los
              establecimientos más reconocidos de la región.
            </p>
            <p>
              Nuestros altos estándares de calidad, confort e higiene no solo
              definen nuestra filosofía, sino que también reflejan nuestro
              compromiso con la satisfacción de cada miembro de la comunidad que
              elige nuestra estancia. Bienvenido a una experiencia única, donde
              la excelencia se encuentra en cada detalle. Descubre el encanto de
              hospedarte en el Hotel Santa Cecilia, donde la comodidad y el
              servicio se entrelazan para ofrecerte momentos inolvidables.
            </p>
          </div>
          <button className="btni">Reservar</button>
        </div>
        <div className="semi-circle">
          <img src={Logo} alt="Logo en la esquina" className="corner-image" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
