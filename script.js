// Navegación y rutas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

// Función para navegar entre páginas
function navigateTo(pageName) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    navMenu.classList.remove('active');
    window.scrollTo(0, 0);
}

// Event listeners para los links de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.page;
        navigateTo(pageName);
    });
});

// Hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    navMenu.classList.remove('active');
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido recibido.\nNos contactaremos a: ${email}`);
        contactForm.reset();
    });
}

const storeData = {
    1: {
        name: 'Perfumeria',
        description: 'Descubri distintos aromas que te haran sentirte renovad@.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-1000'
    },
    2: {
        name: 'Café Tradicional',
        description: 'Experimenta el auténtico sabor del té verde y café artesanal japonés.',
        details: 'Horario: 9:00 AM - 9:00 PM | Tel: (555) 001-2000'
    },
    3: {
        name: 'Tienda de Ropa ZARA',
        description: 'Colecciones modernas con inspiración y estilo.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-3000'
    },
    4: {
        name: 'Tienda de accesorios y guarderia de mascotas - 4Patas',
        description: 'Todo lo necesario para tu mascota.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-4000'
    },
    5: {
        name: 'Patio de comidas',
        description: 'Comidas frias,calientes para llevar o comer en el lugar.',
        details: 'Horario: 11:00 AM - 7:00 PM | Tel: (555) 001-5000'
    }
};

// Obtener elementos del DOM para sitemap
const storeItems = document.querySelectorAll('.store-item');
const storeTitle = document.getElementById('store-title');
const storeDescription = document.getElementById('store-description');
const storeDetails = document.getElementById('store-details');

// Función para mostrar información del local
function displayStoreInfo(storeNum) {
    if (!storeTitle || !storeDescription || !storeDetails) return;

    const store = storeData[storeNum];
    if (store) {
        storeTitle.textContent = store.name;
        storeDescription.textContent = store.description;
        storeDetails.textContent = store.details;
    }
}

// Event listeners para cada local en sitemap
storeItems.forEach(item => {
    item.addEventListener('click', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);
        storeItems.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });

    item.addEventListener('mouseenter', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);
    });
});

// Cargar primer local al abrir sitemap
window.addEventListener('DOMContentLoaded', function() {
    displayStoreInfo(1);
});

// Inicializar con la página de inicio
navigateTo('home');

// Logo click para ir a inicio
document.querySelector('.logo').addEventListener('click', () => {
    navigateTo('home');
});
