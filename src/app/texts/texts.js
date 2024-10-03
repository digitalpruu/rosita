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
        description1: "En Rosita, combinamos lo mejor de la dulcería, los víveres y la papelería en un solo lugar. Desde nuestra apertura, hemos estado dedicados a ofrecer una experiencia única, donde los clientes pueden disfrutar de deliciosos dulces mientras exploran otra variedad de productos.\n" +
            "Nuestra dulcería está llena de golosinas que alegrarán tu día, mientras que nuestros víveres y sección de papelería ofrece todo lo necesario para ti. Cada producto está seleccionado con cuidado para asegurar la mejor calidad y satisfacción.\n" +
            "En Rosita, nos esforzamos por brindar un servicio amigable y una experiencia de compra agradable. Ya sea que vengas por un dulce especial, víveres o por artículos de papelería, nuestro objetivo es hacer que cada visita sea memorable.\n" +
            "Visítanos y descubre cómo Rosita puede endulzar tu día. ¡Te esperamos con una amplia selección y una sonrisa!"
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
