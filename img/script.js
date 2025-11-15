const storeData = {
    1: {
        name: 'Artesanías Sakura',
        description: 'Descubre auténticas artesanías japonesas y souvenirs tradicionales con diseños únicos.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-1000'
    },
    2: {
        name: 'Café Tradicional',
        description: 'Experimenta el auténtico sabor del té verde y café artesanal japonés.',
        details: 'Horario: 9:00 AM - 9:00 PM | Tel: (555) 001-2000'
    },
    3: {
        name: 'Tienda de Ropa',
        description: 'Colecciones modernas con inspiración en la moda japonesa contemporánea.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-3000'
    },
    4: {
        name: 'Dulcería',
        description: 'Postres tradicionales japoneses y dulces artesanales únicos para disfrutar.',
        details: 'Horario: 10:00 AM - 8:00 PM | Tel: (555) 001-4000'
    },
    5: {
        name: 'Joyería Premium',
        description: 'Joyería fina con diseños inspirados en la tradición oriental y lujo contemporáneo.',
        details: 'Horario: 11:00 AM - 7:00 PM | Tel: (555) 001-5000'
    }
};

// Obtener elementos del DOM
const storeItems = document.querySelectorAll('.store-item');
const storeTitle = document.getElementById('store-title');
const storeDescription = document.getElementById('store-text');
const storeDetails = document.getElementById('store-details');

// Función para mostrar información del local
function displayStoreInfo(storeNum) {
    const store = storeData[storeNum];

    storeTitle.textContent = store.name;
    storeDescription.textContent = store.description;
    storeDetails.textContent = store.details;
}

// Event listeners para cada local
storeItems.forEach(item => {
    item.addEventListener('click', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);

        // Remover clase activa de todos
        storeItems.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });

    // Mostrar info al pasar el mouse
    item.addEventListener('mouseenter', function() {
        const storeNum = this.getAttribute('data-store');
        displayStoreInfo(storeNum);
    });
});

// Cargar primer local al iniciar
window.addEventListener('DOMContentLoaded', function() {
    displayStoreInfo(1);
});