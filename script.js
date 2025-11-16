// Navegación y rutas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

function showSlide(n) {
    if (slides.length === 0) return;
    
    // Asegurar que el índice esté en rango
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // Remover clase active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Agregar clase active al actual
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
    resetAutoSlide();
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    resetAutoSlide();
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// Iniciar auto-slide cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(currentSlide);
        autoSlideInterval = setInterval(autoSlide, 5000);
    }
    
    // Pausar auto-slide al hacer hover
    const carouselContainer = document.querySelector('.hero-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            resetAutoSlide();
        });
    }
});

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


const storesDatabase = [
    { id: 3, name: 'Zara', url: 'https://bussetto.github.io/zara-homepage/' },
    { id: 1, name: 'Perfumeria Essence', url: 'https://stwb00.github.io/local/' },
    { id: 4, name: '4Patas', url: 'https://didiersaho.github.io/DesarrolloWebLocalComercialTP/index.html' },
    { id: 2, name: 'Cafe Hana', url: 'https://juanirruiz.github.io/local_comercial_final/' },
    { id: 5, name: 'Magic Dragon', url: 'https://nacholiu.github.io/localComercial/promoActiva.html' }
];

// Función de búsqueda que filtra las cards SOLO por nombre
function searchStore() {
    const searchInput = document.getElementById('storeSearch');
    const searchResults = document.getElementById('searchResults');
    const storeCards = document.querySelectorAll('.store-card');
    
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();

    // Si no hay búsqueda, mostrar todas las cards
    if (query.length === 0) {
        storeCards.forEach(card => {
            card.style.display = '';
            card.style.opacity = '1';
        });
        if (searchResults) {
            searchResults.classList.remove('active');
        }
        return;
    }

    // Filtrar las cards según la búsqueda SOLO POR NOMBRE
    let foundCount = 0;
    storeCards.forEach((card, index) => {
        const store = storesDatabase[index];
        // Solo buscar en el nombre del local
        const matches = store.name.toLowerCase().includes(query);
        
        if (matches) {
            card.style.display = '';
            card.style.opacity = '1';
            foundCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });

    // Mostrar mensaje si no hay resultados
    if (searchResults) {
        if (foundCount === 0) {
            searchResults.innerHTML = '<div class="search-result-item" style="text-align: center; color: var(--text-light);">No se encontró ningún local con ese nombre</div>';
            searchResults.classList.add('active');
        } else {
            searchResults.classList.remove('active');
        }
    }
}

// Búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('storeSearch');
    if (searchInput) {
        // Búsqueda mientras se escribe
        searchInput.addEventListener('input', function() {
            searchStore();
        });

        // Búsqueda al presionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchStore();
            }
        });
    }
});