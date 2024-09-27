const title = "Rosita";
const email = "rosariopacheco842@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573107751650";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Rosita, nos dedicamos a la dulcería y papelería, ofreciendo una variedad de productos que endulzan cualquier ocasión.",
        description2: "Aunque aún no tenemos un mensaje definido sobre nosotros, nuestra pasión por los detalles y la calidad es evidente en cada uno de nuestros productos."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "", // Sin slogan proporcionado
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "www.facebook.com", // Facebook pendiente
        instagram: "www.instagram.com", // Instagram no proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
