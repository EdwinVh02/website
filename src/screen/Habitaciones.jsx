import habitacion from "../assets/Imagen1.jpg";

const habitaciones = [
  {
    id: 1,
    tipo: "Suite Deluxe",
    precio: "$200/noche",
    descripcion: "Amplia suite con vistas panorámicas y comodidades de lujo.",
    imagen: habitacion,
  },
  {
    id: 2,
    tipo: "Habitación Estándar",
    precio: "$100/noche",
    descripcion: "Cómoda habitación con todas las comodidades necesarias.",
    imagen: habitacion,
  },
  {
    id: 3,
    tipo: "Habitación Estándar",
    precio: "$100/noche",
    descripcion: "Cómoda habitación con todas las comodidades necesarias.",
    imagen: habitacion,
  },
  {
    id: 4,
    tipo: "Habitación Estándar",
    precio: "$100/noche",
    descripcion: "Cómoda habitación con todas las comodidades necesarias.",
    imagen: habitacion,
  },
  {
    id: 5,
    tipo: "Suite Deluxe",
    precio: "$200/noche",
    descripcion: "Amplia suite con vistas panorámicas y comodidades de lujo.",
    imagen: habitacion,
  },
  {
    id: 6,
    tipo: "Habitación Estándar",
    precio: "$100/noche",
    descripcion: "Cómoda habitación con todas las comodidades necesarias.",
    imagen: habitacion,
  },
];
function Habitaciones() {
  return (
    <div className="catalogo-container">
      {habitaciones.map((habitacion) => (
        <div key={habitacion.id} className="habitacion-card">
          <img src={habitacion.imagen} alt={`Habitación ${habitacion.tipo}`} />
          <div className="info">
            <h3>{habitacion.tipo}</h3>
            <p>{habitacion.descripcion}</p>
            <p>Precio: {habitacion.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Habitaciones;
