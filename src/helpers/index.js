export const generarId = () => {
  const random = Math.random().toString(36).substring(2, 9);
  const timestamp = Date.now().toString(36).substring(2, 9);
  return `${random}${timestamp}`;
};

export const obtenerFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", options);
};
